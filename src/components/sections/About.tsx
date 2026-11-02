import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { company, coreValues, missions, vision } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="gioi-thieu" aria-labelledby="about-title" className="section overflow-hidden">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="relative order-last lg:order-none lg:col-span-6">
          <Reveal className="relative grid grid-cols-6 auto-rows-[3.4rem] gap-3 sm:auto-rows-[5rem] sm:gap-4 lg:auto-rows-[4.6rem] xl:auto-rows-[5.4rem]">
            <div className="relative col-span-4 row-span-4 overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/images/about/cua-hang-vat-lieu-au-lau.jpg"
                alt="Cửa hàng vật liệu xây dựng Hà Thủy Anh tại Âu Lâu"
                fill
                sizes="(min-width: 1024px) 34vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 col-start-5 row-span-3 overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/images/about/kho-thep-xay-dung.jpg"
                alt="Thép cây xây dựng"
                fill
                sizes="(min-width: 1024px) 17vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-3 col-start-3 row-span-2 row-start-5 overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/images/about/kho-bai-xe-nang-boc-xep.jpg"
                alt="Xe nâng bốc xếp gạch tại kho bãi"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 row-start-5 flex flex-col justify-center rounded-2xl bg-deep p-4 text-white sm:rounded-3xl sm:p-6">
              <p className="text-[0.7rem] leading-snug text-white/60 sm:text-sm">Đăng ký kinh doanh từ</p>
              <p className="mt-1 text-2xl font-extrabold sm:text-4xl">2011</p>
              <p className="mt-0.5 hidden text-xs text-white/60 sm:block">Cấp lần đầu {company.registrationDate}</p>
            </div>
            <div className="col-span-1 col-start-6 row-span-3 row-start-4 hidden items-end sm:flex">
              <div aria-hidden className="hex-v h-24 w-full bg-brand/90" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <SectionHeading
            id="about-title"
            eyebrow="Về chúng tôi"
            title="Hà Thủy Anh – Đối tác tin cậy của mọi công trình"
          />
          <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              <strong className="font-semibold text-ink">{company.legalName}</strong> là đơn vị cung
              ứng vật liệu xây dựng tại Lào Cai, đồng hành cùng các công trình từ giai đoạn nền móng
              đến khi hoàn thiện.
            </p>
            <p>
              Chúng tôi chú trọng chất lượng sản phẩm, tính ổn định của nguồn cung và sự tin cậy
              trong từng lần hợp tác — vật liệu đạt tiêu chuẩn kỹ thuật, nguồn gốc rõ ràng, giá cả
              cạnh tranh cùng dịch vụ hỗ trợ tận tâm.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal className="rounded-2xl border border-line bg-mist p-6">
              <Eye aria-hidden className="size-6 text-accent" />
              <h3 className="mt-4 text-lg font-bold text-ink">Tầm nhìn</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{vision}</p>
            </Reveal>
            <Reveal className="rounded-2xl border border-line bg-mist p-6" delay={0.08}>
              <Target aria-hidden className="size-6 text-brand" />
              <h3 className="mt-4 text-lg font-bold text-ink">Sứ mệnh</h3>
              <ul className="mt-2 space-y-2 text-[0.95rem] leading-relaxed text-muted">
                {missions.map((mission) => (
                  <li key={mission} className="flex gap-2.5">
                    <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    {mission}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container-page mt-16 lg:mt-24">
        <Reveal>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted">Giá trị cốt lõi</h3>
        </Reveal>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, index) => (
            <Reveal as="li" key={value.title} delay={index * 0.06} className="bg-white p-6 sm:last:col-span-2 lg:p-7 lg:last:col-span-1">
              <span className="text-sm font-bold text-brand tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-bold text-ink">{value.title}</p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{value.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
