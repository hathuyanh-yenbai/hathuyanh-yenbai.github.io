import { projectListGroups } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "./ProjectGallery";

export function Projects() {
  return (
    <section id="cong-trinh" aria-labelledby="projects-title" className="section bg-mist">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="Công trình tiêu biểu"
          title="Dấu ấn trên những công trình tiêu biểu"
          description="Một số công trình tiêu biểu trong hồ sơ năng lực của Hà Thủy Anh, trải rộng từ nhà ở dân dụng, nhà máy, cơ quan hành chính đến hạ tầng giao thông."
        />

        <ProjectGallery />

        <div className="mt-20 lg:mt-24">
          <Reveal className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">Các công trình khác</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Ngoài ra, doanh nghiệp chúng tôi đã, đang và sẽ còn đồng hành cùng nhiều 
              công trình lớn nhỏ khác trong khu vực.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projectListGroups.map((group, index) => (
              <Reveal key={group.title} delay={(index % 3) * 0.05}>
                <h4 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.12em] text-brand">
                  <span aria-hidden className="hex size-2.5 bg-current" />
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-ink/80">
                  {group.items.map((item) => (
                    <li key={item} className="border-l-2 border-line pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
