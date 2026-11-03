import { Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="lien-he"
      aria-labelledby="contact-title"
      className="section relative isolate overflow-hidden bg-deep-900 text-white"
    >
      <div aria-hidden className="bg-grid-fade absolute inset-0 -z-10" />
      <div aria-hidden className="hex absolute -right-32 -top-20 -z-10 size-[28rem] bg-brand/15" />
      <div aria-hidden className="hex absolute -bottom-24 left-1/3 -z-10 size-64 bg-accent/15" />

      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-300 sm:text-sm">
            <span aria-hidden className="hex inline-block size-3 bg-current" />
            Liên hệ
          </p>
          <h2
            id="contact-title"
            className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Cùng Hà Thủy Anh kiến tạo những công trình bền vững
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            Gọi ngay để được tư vấn vật liệu và báo giá nhanh cho công trình của bạn.
          </p>

          <ul className="mt-9 space-y-6">
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand">
                <Phone aria-hidden className="size-5" />
              </span>
              <div>
                <p className="text-sm text-white/60">Hotline</p>
                <ul className="mt-2 space-y-2.5">
                  {company.phones.map((phone) => (
                    <li key={phone.tel} className="flex items-center gap-3">
                      <a
                        href={`tel:${phone.tel}`}
                        className="min-w-[8.5rem] text-lg font-bold tabular-nums hover:text-brand-300"
                      >
                        {phone.display}
                      </a>
                      <a
                        href={phone.zalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-[#0068ff] px-3 text-sm font-semibold transition-colors hover:bg-[#0055d4]"
                      >
                        <MessageCircle aria-hidden className="size-4" />
                        Zalo
                        <span className="sr-only">
                          {" "}
                          {phone.display} (mở tab mới)
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10">
                <Mail aria-hidden className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-white/60">Email</p>
                <a href={`mailto:${company.email}`} className="mt-1 block break-all text-lg font-bold hover:text-brand-300">
                  {company.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10">
                <MapPin aria-hidden className="size-5" />
              </span>
              <div>
                <p className="text-sm text-white/60">Địa chỉ đăng ký kinh doanh</p>
                <address className="mt-1 not-italic font-semibold leading-relaxed">{company.address.full}</address>
                <a
                  href={company.mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-sm font-semibold text-brand-300 underline-offset-4 hover:underline"
                >
                  Tìm trên Google Maps<span className="sr-only"> (mở tab mới)</span>
                </a>
              </div>
            </li>
          </ul>

          <a
            href={company.profilePdf.href}
            download
            className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/25 px-6 font-semibold transition-colors hover:border-white hover:bg-white/10"
          >
            <Download aria-hidden className="size-5 text-brand-300" />
            <span>
              {company.profilePdf.label}
              <span className="ml-2 text-sm font-normal text-white/60">{company.profilePdf.meta}</span>
            </span>
          </a>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
