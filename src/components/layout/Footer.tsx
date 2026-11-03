import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, navItems } from "@/data/company";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-deep pb-28 pt-16 text-white/75 lg:pb-10">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo tone="dark" />
          <p className="mt-6 max-w-md leading-relaxed">
            {company.legalName} — cung ứng vật liệu xây dựng, thiết bị hoàn thiện và sản xuất gạch
            không nung, cống bê tông cho công trình dân dụng, công nghiệp và hạ tầng.
          </p>
          <dl className="mt-6 space-y-1.5 text-sm">
            <div className="flex gap-2">
              <dt className="text-white/50">Mã số thuế:</dt>
              <dd className="font-semibold text-white">{company.taxId}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/50">Người đại diện:</dt>
              <dd className="font-semibold text-white">
                {company.representative} — {company.representativeTitle}
              </dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Liên kết chân trang" className="lg:col-span-3">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">Điều hướng</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">Liên hệ</p>
          <ul className="mt-5 space-y-4 text-[0.95rem]">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-brand-400" />
              <address className="not-italic">{company.address.full}</address>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-1 size-4 shrink-0 text-brand-400" />
              <ul className="space-y-2">
                {company.phones.map((phone) => (
                  <li key={phone.tel} className="flex items-center gap-3">
                    <a
                      href={`tel:${phone.tel}`}
                      className="min-w-[7.5rem] font-semibold text-white tabular-nums hover:text-brand-300"
                    >
                      {phone.display}
                    </a>
                    <a
                      href={phone.zalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-7 items-center gap-1 rounded-full bg-[#0068ff] px-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0055d4]"
                    >
                      <MessageCircle aria-hidden className="size-3.5" />
                      Zalo
                      <span className="sr-only">
                        {" "}
                        {phone.display} (mở tab mới)
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-1 size-4 shrink-0 text-brand-400" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
        <p>
          © {company.copyrightYear} {company.legalName}. Bảo lưu mọi quyền.
        </p>
        <p>{company.tagline}</p>
      </div>
    </footer>
  );
}
