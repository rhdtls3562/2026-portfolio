/** 경력과 프로젝트 이력을 카드 형태로 보여주는 기록 섹션 컴포넌트. */
import Image from "next/image";
import { icons } from "@/constants/ASSETS";
import { PROJECTS } from "@/app/(home)/constants/recordSectionData";

export default function RecordSection() {
  return (
    <section
      id="record"
      className="relative py-24 md:py-36 px-6 bg-(--color-surface)"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--color-gold)/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--color-gold)/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-20">
          <Image
            src={icons.iconFile}
            alt=""
            width={28}
            height={28}
            className="size-7 opacity-80"
          />
          <div className="flex items-center gap-4">
            <span className="text-(--color-gold) tracking-[0.4em] text-xs uppercase font-medium">
              02
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-(--color-text-primary)">
              Record
            </h2>
          </div>
          <div className="flex-1 h-px bg-(--color-border)" />
        </div>

        <div className="space-y-0">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="group border-b border-(--color-border) py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-(--color-bg)/30 transition-colors duration-300 -mx-6 px-6"
            >
              <div className="md:col-span-1 flex items-start">
                <span className="text-(--color-text-muted) text-xs tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-3">
                <h3 className="text-lg md:text-xl font-semibold text-(--color-text-primary) group-hover:text-(--color-gold) transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-(--color-text-muted) text-xs tracking-wide">
                  {project.period}
                </p>
                <p className="text-(--color-gold)/70 text-xs tracking-wide mt-1">
                  {project.role}
                </p>
              </div>

              <div className="md:col-span-5">
                <p className="text-(--color-text-secondary) text-sm leading-loose">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-(--color-text-muted) text-xs tracking-wide border border-(--color-border) px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 flex items-start justify-end gap-4">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--color-text-muted) hover:text-(--color-gold) text-xs tracking-widest uppercase transition-colors duration-300 border-b border-transparent hover:border-(--color-gold) pb-0.5"
                  >
                    Github
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--color-text-muted) hover:text-(--color-gold) text-xs tracking-widest uppercase transition-colors duration-300 border-b border-transparent hover:border-(--color-gold) pb-0.5"
                  >
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
