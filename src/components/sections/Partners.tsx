import Image from "next/image";
import { otherBrands, partnerBrands } from "@/data/partners";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Partners() {
  return (
    <section id="doi-tac" aria-labelledby="partners-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="partners-title"
          eyebrow="Thương hiệu"
          title="Thương hiệu và đối tác tiêu biểu"
          description="Các thương hiệu vật liệu và thiết bị có trong danh mục cung ứng của Hà Thủy Anh theo Hồ sơ năng lực 2026."
          align="center"
        />

        <Reveal>
          <ul className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4 lg:mt-16 lg:grid-cols-6">
            {partnerBrands.map((brand) => (
              <li key={brand.name} className="relative grid aspect-[4/3] place-items-center bg-white p-2.5 sm:aspect-[3/2] sm:p-6">
                <div className="relative size-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="(min-width: 1024px) 180px, 30vw"
                    className="object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
          <p>
            Cùng các thương hiệu khác: {otherBrands.join(", ")}.
          </p>
          <p className="mt-2 text-xs text-muted/80">
            Logo và nhãn hiệu thuộc quyền sở hữu của các doanh nghiệp tương ứng.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
