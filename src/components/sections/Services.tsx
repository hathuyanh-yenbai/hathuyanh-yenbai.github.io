import Image from "next/image";
import { ArrowUpRight, Check, Factory } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="linh-vuc" aria-labelledby="services-title" className="section bg-mist">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Lĩnh vực hoạt động"
            title="Giải pháp vật liệu toàn diện cho mọi công trình"
          />
          <Reveal className="max-w-md text-base leading-relaxed text-muted lg:pb-2">
            Từ vật liệu thô cho phần móng, kết cấu cho đến thiết bị hoàn thiện — một đầu mối cung ứng
            cho toàn bộ vòng đời công trình.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              as="article"
              key={service.id}
              delay={index * 0.08}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgb(16_43_36/0.35)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/0" />
                <span className="hex absolute bottom-4 left-5 grid h-12 w-14 place-items-center bg-brand text-base font-extrabold text-white">
                  {service.index}
                </span>
                {service.highlight && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-deep">
                    <Factory aria-hidden className="size-3.5 text-brand" />
                    {service.highlight}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold text-ink sm:text-[1.35rem]">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{service.description}</p>
                <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 text-[0.92rem] text-ink/85 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-3 lg:text-[0.88rem] xl:text-[0.92rem]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#lien-he"
                  className="mt-auto inline-flex items-center gap-1.5 self-start pt-7 text-[0.95rem] font-semibold text-brand hover:text-brand-700"
                >
                  Tư vấn & báo giá
                  <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only">— {service.title}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
