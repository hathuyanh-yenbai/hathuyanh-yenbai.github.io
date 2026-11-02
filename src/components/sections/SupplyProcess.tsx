import { supplySteps } from "@/data/commitments";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SupplyProcess() {
  return (
    <section id="quy-trinh" aria-labelledby="process-title" className="section bg-mist">
      <div className="container-page">
        <SectionHeading
          id="process-title"
          eyebrow="Quy trình"
          title="Quy trình cung ứng chuyên nghiệp"
          description="Sáu bước rõ ràng, từ khi tiếp nhận nhu cầu đến hỗ trợ sau bán hàng."
        />

        <ol className="relative mt-12 grid gap-0 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          <span
            aria-hidden
            className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-brand via-accent to-brand lg:bottom-auto lg:left-[8%] lg:right-[8%] lg:top-7 lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {supplySteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.07}
              className="relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:items-center lg:pb-0 lg:text-center"
            >
              <span className="hex relative z-10 grid h-14 w-14 shrink-0 place-items-center bg-white text-lg font-extrabold text-brand shadow-sm ring-0 lg:h-14 lg:w-16">
                <span className="hex absolute inset-[3px] grid place-items-center bg-brand text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <div className="pt-2 lg:pt-4">
                <h3 className="text-lg font-bold leading-snug text-ink lg:text-base xl:text-lg">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted lg:text-sm">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
