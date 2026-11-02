import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroHighlights } from "@/data/company";
import { ContactButton } from "@/components/ui/ContactButton";

export function Hero() {
  return (
    <section
      id="trang-chu"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-deep-900 text-white"
    >
      <Image
        src="/images/hero/doi-xe-ha-thuy-anh.jpg"
        alt="Đội xe tải mang thương hiệu Hà Thủy Anh tại bãi tập kết vật liệu"
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[30%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(10_29_24/0.94)_0%,rgb(16_43_36/0.86)_42%,rgb(16_43_36/0.45)_75%,rgb(16_43_36/0.25)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-deep-900/90 to-transparent"
      />
      <div aria-hidden className="bg-grid-fade absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="hex absolute -right-24 top-28 -z-10 hidden size-[26rem] border-0 bg-brand/15 lg:block"
      />
      <div
        aria-hidden
        className="hex absolute right-40 top-[22rem] -z-10 hidden size-40 bg-accent/25 lg:block"
      />

      <div className="container-page flex flex-1 flex-col justify-center pb-16 pt-32 sm:pt-36 lg:pb-24">
        <div className="animate-[rise_.9s_var(--ease-out-soft)_both]">
          <p className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-200 backdrop-blur sm:text-xs">
            <span aria-hidden className="hex size-2.5 bg-brand" />
            Đối tác cung ứng vật liệu xây dựng
          </p>
          <h1
            id="hero-title"
            className="mt-7 max-w-4xl text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Vững nền móng.{" "}
            <span className="block text-brand-400">Bền tương lai.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
            <strong className="font-semibold text-white">Hà Thủy Anh – Niềm tin của mọi công trình.</strong>{" "}
            Cung ứng vật liệu xây dựng chất lượng, nguồn hàng ổn định và giải pháp vận chuyển linh
            hoạt cho các công trình dân dụng, công nghiệp và hạ tầng.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ContactButton href="#lien-he" className="px-7">
              Yêu cầu báo giá
              <ArrowRight aria-hidden className="size-4" />
            </ContactButton>
            <ContactButton href="#nang-luc" variant="outline-light" className="px-7">
              Khám phá năng lực
            </ContactButton>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-deep-900/60 backdrop-blur-md">
        <dl className="container-page grid grid-cols-3 divide-x divide-white/10">
          {heroHighlights.map((item) => (
            <div key={item.label} className="flex flex-col-reverse gap-1 px-2 py-5 first:pl-0 sm:px-6 sm:py-7 lg:px-10">
              <dt className="text-[0.7rem] leading-snug text-white/65 sm:text-sm">{item.label}</dt>
              <dd className="text-base font-extrabold tracking-tight text-white min-[375px]:text-lg sm:text-3xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#gioi-thieu"
        aria-label="Cuộn xuống phần giới thiệu"
        className="absolute bottom-28 right-6 hidden size-11 place-items-center rounded-full border border-white/25 text-white/80 transition-colors hover:bg-white/10 lg:grid"
      >
        <ChevronDown aria-hidden className="size-5" />
      </a>
    </section>
  );
}
