import Image from "next/image";
import { productCategories } from "@/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Products() {
  return (
    <section id="san-pham" aria-labelledby="products-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="products-title"
          eyebrow="Sản phẩm"
          title="Danh mục sản phẩm đa dạng"
          description="Giá vật liệu thay đổi theo thời điểm, chủng loại và khối lượng. Vui lòng liên hệ để nhận báo giá chính xác cho công trình của bạn."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-16 lg:grid-cols-5">
          {productCategories.map((product, index) => (
            <Reveal as="li" key={product.id} delay={(index % 5) * 0.05}>
              <a
                href="#lien-he"
                className="group relative flex aspect-[3/4] flex-col sm:aspect-[16/11] lg:aspect-[3/4] justify-end overflow-hidden rounded-2xl bg-deep text-white sm:rounded-3xl"
              >
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-deep-900/95 via-deep-900/40 to-transparent" />
                <span className="relative p-4 sm:p-5">
                  <span className="block text-xs font-bold text-brand-300 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-base font-bold leading-snug sm:text-lg">{product.name}</span>
                  <span className="mt-1.5 hidden text-xs leading-snug text-white/70 sm:block">
                    {product.description}
                  </span>
                  <span className="mt-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur transition-colors group-hover:bg-brand">
                    Liên hệ báo giá
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
