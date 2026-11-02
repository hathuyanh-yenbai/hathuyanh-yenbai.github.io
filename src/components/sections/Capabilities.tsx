import Image from "next/image";
import { capabilityMetrics, capabilityPoints } from "@/data/capabilities";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <section
      id="nang-luc"
      aria-labelledby="capabilities-title"
      className="section relative isolate overflow-hidden bg-deep text-white"
    >
      <div aria-hidden className="bg-grid-fade absolute inset-0 -z-10" />
      <div aria-hidden className="hex absolute -left-40 bottom-0 -z-10 size-[30rem] bg-brand/10" />

      <div className="container-page">
        <SectionHeading
          id="capabilities-title"
          eyebrow="Chủ động nguồn cung – Đảm bảo tiến độ"
          title="Năng lực cung ứng vững mạnh"
          description="Hệ thống cung ứng chuyên nghiệp, đáp ứng nhanh nhu cầu từ công trình dân dụng đến dự án quy mô lớn."
          tone="dark"
        />

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 lg:mt-16 lg:grid-cols-3">
          {capabilityMetrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.05}
              className="flex flex-col-reverse justify-end gap-3 bg-deep p-5 sm:p-8"
            >
              <dt>
                <span className="block text-sm font-semibold text-white/90 sm:text-base">{metric.label}</span>
                {metric.note && (
                  <span className="mt-1 block text-xs leading-snug text-white/55 sm:text-sm">{metric.note}</span>
                )}
              </dt>
              <dd className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter value={metric.value} />
                </span>
                <span className="text-sm font-bold text-brand-300 sm:text-lg">{metric.unit}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-14">
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[28rem]">
              <Image
                src="/images/capabilities/xe-tai-cho-gach.jpg"
                alt="Xe đầu kéo chở gạch nung xuất kho"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 w-[46%] overflow-hidden rounded-2xl border-4 border-deep sm:right-6 lg:-right-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/capabilities/kho-thep.jpg"
                  alt="Thép cây giao đến công trường"
                  fill
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-x-10 gap-y-8 pt-6 sm:grid-cols-2 lg:col-span-7 lg:pt-0">
            {capabilityPoints.map((point, index) => (
              <Reveal as="li" key={point.title} delay={index * 0.06} className="border-t border-white/15 pt-6">
                <span className="text-sm font-bold text-brand-300 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{point.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
