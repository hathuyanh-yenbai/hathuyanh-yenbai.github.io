import Image from "next/image";
import { Boxes, CheckCircle2, ShieldCheck, Tag, Truck } from "lucide-react";
import { advantages, qualityCommitments } from "@/data/commitments";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = { boxes: Boxes, shield: ShieldCheck, tag: Tag, truck: Truck };

export function Commitments() {
  return (
    <section id="vi-sao" aria-labelledby="why-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="why-title"
          eyebrow="Lợi thế cạnh tranh"
          title="Tại sao lựa chọn Hà Thủy Anh?"
          align="center"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            const Icon = icons[advantage.icon];
            return (
              <Reveal
                as="li"
                key={advantage.title}
                delay={index * 0.07}
                className="group rounded-3xl border border-line p-7 transition-colors duration-300 hover:border-brand/40 hover:bg-brand-50/50"
              >
                <span className="hex grid h-14 w-16 place-items-center bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon aria-hidden className="size-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug text-ink">{advantage.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{advantage.description}</p>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-16 grid overflow-hidden rounded-3xl bg-deep text-white lg:mt-24 lg:grid-cols-2">
          <div className="relative min-h-64 lg:min-h-full">
            <Image
              src="/images/capabilities/bai-gach-nung.jpg"
              alt="Bãi tập kết gạch nung và xe tải giao hàng"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-deep/30" />
          </div>
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-300">Cam kết chất lượng</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
              Đúng chủng loại, đúng tiêu chuẩn, đúng tiến độ
            </h3>
            <ul className="mt-8 space-y-5">
              {qualityCommitments.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-400" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-white/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
