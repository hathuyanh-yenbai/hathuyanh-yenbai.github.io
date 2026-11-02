"use client";

import { useState, type FormEvent } from "react";
import { Info, Send } from "lucide-react";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import { cn } from "@/lib/utils";

// Set NEXT_PUBLIC_CONTACT_ENDPOINT to a URL accepting a JSON POST to deliver requests via API.
// Without it, the form composes an email in the visitor's mail app (no data leaves the browser).
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type Field = "name" | "phone" | "email" | "company" | "need" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "mailto" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const empty: Values = { name: "", phone: "", email: "", company: "", need: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Vui lòng nhập họ và tên.";
  const digits = values.phone.replace(/[\s.\-()]/g, "");
  if (!/^(\+?84|0)\d{9,10}$/.test(digits)) errors.phone = "Số điện thoại chưa hợp lệ (ví dụ: 0985 426 522).";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Email chưa hợp lệ.";
  if (!values.need) errors.need = "Vui lòng chọn nhu cầu vật liệu.";
  if (values.message.trim().length < 10) errors.message = "Vui lòng mô tả yêu cầu (tối thiểu 10 ký tự).";
  return errors;
}

function composeBody(values: Values) {
  return [
    `Họ và tên: ${values.name}`,
    `Số điện thoại: ${values.phone}`,
    values.email ? `Email: ${values.email}` : null,
    values.company ? `Công ty / đơn vị: ${values.company}` : null,
    `Nhu cầu vật liệu: ${values.need}`,
    "",
    "Nội dung yêu cầu:",
    values.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

const inputClass =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15";

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const update = (field: Field) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    if (endpoint) {
      setStatus({ kind: "sending" });
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error(String(response.status));
        setStatus({ kind: "sent" });
        setValues(empty);
      } catch {
        setStatus({
          kind: "error",
          message: `Chưa gửi được yêu cầu. Vui lòng gọi ${company.phones[0].display} hoặc email ${company.email}.`,
        });
      }
      return;
    }

    const subject = `Yêu cầu báo giá: ${values.need} — ${values.name}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeBody(values))}`;
    setStatus({ kind: "mailto" });
  }

  const field = (name: Field) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: update(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: cn(inputClass, errors[name] ? "border-red-500" : "border-line"),
  });

  const errorText = (name: Field) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="mt-1.5 text-sm font-medium text-red-600">
        {errors[name]}
      </p>
    );

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-3xl bg-white p-6 text-ink shadow-[0_32px_64px_-32px_rgb(0_0_0/0.45)] sm:p-9">
      <h3 className="text-xl font-extrabold sm:text-2xl">Gửi yêu cầu báo giá</h3>
      <p className="mt-2 text-sm text-muted">
        Các trường có dấu <span className="text-red-600">*</span> là bắt buộc.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold">
            Họ và tên <span className="text-red-600">*</span>
          </label>
          <input type="text" autoComplete="name" required {...field("name")} />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-sm font-semibold">
            Số điện thoại <span className="text-red-600">*</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" required {...field("phone")} />
          {errorText("phone")}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold">
            Email <span className="font-normal text-muted">(không bắt buộc)</span>
          </label>
          <input type="email" autoComplete="email" {...field("email")} />
          {errorText("email")}
        </div>
        <div>
          <label htmlFor="contact-company" className="text-sm font-semibold">
            Công ty / đơn vị <span className="font-normal text-muted">(không bắt buộc)</span>
          </label>
          <input type="text" autoComplete="organization" {...field("company")} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-need" className="text-sm font-semibold">
            Nhu cầu vật liệu <span className="text-red-600">*</span>
          </label>
          <select required {...field("need")}>
            <option value="">— Chọn nhóm vật liệu —</option>
            {productCategories.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
            <option value="Nhiều loại vật liệu">Nhiều loại vật liệu</option>
            <option value="Khác">Khác</option>
          </select>
          {errorText("need")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold">
            Nội dung yêu cầu <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={4}
            required
            placeholder="Chủng loại, khối lượng, địa điểm công trình, thời gian cần hàng…"
            {...field("message")}
          />
          {errorText("message")}
        </div>
      </div>

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-60 sm:w-auto"
      >
        <Send aria-hidden className="size-4" />
        {status.kind === "sending" ? "Đang gửi…" : endpoint ? "Gửi yêu cầu" : "Soạn email yêu cầu"}
      </button>

      <div aria-live="polite" className="mt-5 text-sm">
        {status.kind === "mailto" && (
          <p className="rounded-xl bg-brand-50 p-4 text-brand-700">
            Ứng dụng email của bạn đã được mở với nội dung yêu cầu. Vui lòng bấm <strong>Gửi</strong> trong
            ứng dụng email để hoàn tất. Nếu không thấy cửa sổ email, hãy gửi trực tiếp tới{" "}
            <a className="font-semibold underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>{" "}
            hoặc gọi {company.phones[0].display}.
          </p>
        )}
        {status.kind === "sent" && (
          <p className="rounded-xl bg-brand-50 p-4 text-brand-700">
            Yêu cầu đã được gửi. Hà Thủy Anh sẽ liên hệ lại với bạn qua số điện thoại đã cung cấp.
          </p>
        )}
        {status.kind === "error" && <p className="rounded-xl bg-red-50 p-4 text-red-700">{status.message}</p>}
      </div>

      {!endpoint && (
        <p className="mt-4 flex gap-2 text-xs leading-relaxed text-muted">
          <Info aria-hidden className="mt-0.5 size-3.5 shrink-0" />
          Biểu mẫu sẽ mở ứng dụng email trên thiết bị của bạn để gửi yêu cầu tới {company.email}.
        </p>
      )}
    </form>
  );
}
