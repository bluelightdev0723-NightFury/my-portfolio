"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StarfieldBackdrop } from "@/components/three/StarfieldBackdrop";

gsap.registerPlugin(ScrollTrigger);

function ProjectMedia({
  project,
  className = "",
}: {
  project: (typeof portfolio.projects)[0];
  className?: string;
}) {
  const images = useMemo(() => {
    return project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];
  }, [project.image, project.images]);

  const durations = useMemo(() => {
    return images.map(() => 3000);
  }, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    let mounted = true;
    let timeoutId: number | null = null;

    const scheduleNext = (index: number) => {
      const delay = durations[index] ?? 3000;
      timeoutId = window.setTimeout(() => {
        if (!mounted) return;
        setCurrentIndex((prev) => (prev + 1) % images.length);
        scheduleNext((index + 1) % images.length);
      }, delay);
    };

    scheduleNext(currentIndex);

    return () => {
      mounted = false;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, durations]);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {images.map((src, index) => {
        const isGif = /\.gif$/i.test(src);
        const visibleClass = index === currentIndex ? "opacity-100" : "opacity-0";

        return isGif ? (
          <div key={`${project.title}-${src}-${index}`} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${visibleClass}`}>
            <img
              src={src}
              alt={project.title}
              className="max-h-full max-w-full object-contain block"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        ) : (
          <Image
            key={`${project.title}-${src}-${index}`}
            src={src}
            alt={project.title}
            fill
            className={`object-contain transition-opacity duration-700 ease-out ${visibleClass}`}
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority={index === 0}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        );
      })}
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);
  const jcpProjectTechnologies = [
    "Kotlin",
    "Search & filtering",
    "Payment integration",
    "API integration",
    "CI / CD",
    "Personalized recommendations",
  ];

  const jcpProjectImages = [
    "/images/jcp/jcp-01.jpeg",
    "/images/jcp/jcp-02.jpeg",
    "/images/jcp/jcp-03.jpeg",
    "/images/jcp/jcp-04.jpeg",
    "/images/jcp/jcp-05.jpeg",
    "/images/jcp/jcp-06.jpeg",
    "/images/jcp/jcp-07.jpeg",
    "/images/jcp/jcp-08.jpeg",
  ];

  const projectSlides = [
    ...portfolio.projects,
    {
      title: "__special__",
      description: "",
      technologies: jcpProjectTechnologies,
      image: jcpProjectImages[0],
      images: jcpProjectImages,
      liveUrl: "",
      githubUrl: portfolio.contact.github,
    } as (typeof portfolio.projects)[0],
  ];
  const total = projectSlides.length;

  useEffect(() => {
    const horizontal = sectionRef.current?.querySelector<HTMLElement>(
      "[data-horizontal-scroll]"
    );
    const track = sectionRef.current?.querySelector<HTMLElement>(
      "[data-horizontal-track]"
    );
    if (!horizontal || !track || window.innerWidth < 1024) return;

    const slides = track.querySelectorAll<HTMLElement>("[data-project-slide]");
    const getScroll = () => Math.max(track.scrollWidth - horizontal.offsetWidth, 100);

    const tween = gsap.to(track, {
      x: () => -getScroll(),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        pin: true,
        scrub: 1,
        end: () => `+=${Math.max(getScroll(), 100)}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          setHintVisible(self.progress < 0.92);
          const slideProgress = self.progress * Math.max(total - 1, 1);
          setActiveIndex(Math.min(Math.round(slideProgress), total - 1));

          slides.forEach((slide, i) => {
            const dist = Math.abs(i - slideProgress);
            const scale = Math.max(0.9, 1 - dist * 0.05);
            const opacity = Math.max(0.4, 1 - dist * 0.35);
            const y = dist * 24;
            gsap.set(slide, {
              scale,
              opacity,
              y,
              transformOrigin: "center center",
            });

            const img = slide.querySelector<HTMLElement>("[data-project-image]");
            if (img) {
              gsap.set(img, { x: dist * -40 * Math.sign(i - slideProgress) });
            }
          });
        },
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [total]);

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden bg-bg-surface/40">
      <StarfieldBackdrop />
      <div className="section-padding-compact pb-10 pt-14 lg:pb-0">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Featured work"
            title="Selected projects"
            subtitle="Scroll to explore — each project fills the viewport as you move."
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 pb-14 lg:hidden md:px-10">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div
        data-horizontal-scroll
        className="relative hidden h-screen overflow-hidden lg:block"
      >
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-bg-deep/30 via-transparent to-bg-deep/20" />

        <div className="pointer-events-none absolute left-8 top-8 z-30 font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
          Featured
        </div>

        <div className="pointer-events-none absolute right-8 top-8 z-30 font-mono text-sm text-accent-cyan">
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="text-text-muted"> / {String(total).padStart(2, "0")}</span>
        </div>

        {hintVisible && (
          <div className="pointer-events-none absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-text-muted">
            <span className="animate-pulse">Scroll</span>
            <span className="text-accent-cyan">↓</span>
          </div>
        )}

        <div data-horizontal-track className="absolute left-0 top-0 flex h-full items-center">
          {projectSlides.map((project, i) => {
             if (project.title === "__special__") {
               return (
                 <article
                   key="special-project"
                   data-project-slide
                   className="flex h-full w-screen shrink-0 items-center px-[8vw]"
                 >
                   <div className="grid w-full max-w-7xl grid-cols-12 items-center gap-8">
                     <div className="col-span-12 lg:col-span-7">
                       <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
                         <div data-project-image className="absolute inset-0 will-change-transform">
                           <ProjectMedia project={project} />
                           <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-bg-deep/10 to-transparent" />
                         </div>
                       </div>
                     </div>

                     <div className="col-span-12 lg:col-span-5">
                       <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
                         Project {String(i + 1).padStart(2, "0")}
                       </p>
                       <h3 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.05]">
                         <span>
                           <span style={{ color: '#dfe7ee', textShadow: '0 0 6px rgba(255,255,255,0.85), 0 0 12px rgba(191,196,203,0.9), 0 0 18px rgba(255,255,255,0.5)' }}>JCP</span>
                           <span style={{ color: '#d62828', textShadow: '0 0 8px rgba(214,40,40,0.7), 0 0 14px rgba(214,40,40,0.45)' }}>enney</span>
                         </span>
                       </h3>
                       <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
                         Built scalable Android e-commerce experiences with personalized recommendations, secure payments, offline-first caching, and performance-optimized product discovery and checkout flows.
                       </p>
                       <div className="mt-5 flex flex-wrap gap-2">
                         {jcpProjectTechnologies.map((tech) => (
                           <span
                             key={tech}
                             className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted"
                           >
                             {tech}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 </article>
               );
             }

             return (
               <article
                 key={`${project.title}-${i}`}
                 data-project-slide
                 className="flex h-full w-screen shrink-0 items-center px-[8vw]"
               >
                 <div className="grid w-full max-w-7xl grid-cols-12 items-center gap-8">
                   <div className="col-span-12 lg:col-span-7">
                     <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
                       <div
                         data-project-image
                         className="absolute inset-0 will-change-transform"
                       >
                         <ProjectMedia project={project} />
                         <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-bg-deep/10 to-transparent" />
                       </div>
                       {project.honor && (
                         <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-200 backdrop-blur">
                           <span>🏆</span>
                           {project.honor}
                         </div>
                       )}
                     </div>
                   </div>

                   <div className="col-span-12 lg:col-span-5">
                     <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
                       Project {String(i + 1).padStart(2, "0")}
                     </p>
                     <h3 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.05]">
                       {project.title === 'T-Life' ? (
                         <span>
                           <span style={{ color: '#e20074' }}>T</span>-Life
                         </span>
                       ) : project.title === 'Goldman Sachs Marquee' ? (
                         <span>
                           <span style={{ color: '#333333', textShadow: '2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.5)' }}>G</span>oldman <span style={{ color: '#333333', textShadow: '2px 2px 4px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.5)' }}>S</span>achs Marquee
                         </span>
                       ) : project.title === 'Spirit Airlines' ? (
                         <span>
                           <span style={{ color: '#facc15' }}>S</span>pirit <span style={{ color: '#facc15' }}>A</span>irlines
                         </span>
                       ) : project.title === 'myChevrolet' ? (
                         <span>
                           <span style={{ color: '#dfe7ee', textShadow: '0 0 6px rgba(255,255,255,0.85), 0 0 12px rgba(191,196,203,0.9), 0 0 18px rgba(255,255,255,0.5)' }}>my</span>
                           <span style={{ color: '#d4af37', textShadow: '0 0 8px rgba(255,215,110,0.9), 0 0 16px rgba(212,175,55,0.7), 0 0 24px rgba(255,215,110,0.45)' }}>Chevrolet</span>
                         </span>
                       ) : (
                         project.title
                       )}
                     </h3>
                     <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
                       {project.description}
                     </p>
                     <div className="mt-5 flex flex-wrap gap-2">
                       {project.technologies.map((tech) => (
                         <span
                           key={tech}
                           className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted"
                         >
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>
               </article>
             );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof portfolio.projects)[0];
}) {
  return (
    <GlassCard className="group relative overflow-hidden !p-0">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10">
        <ProjectMedia project={project} className="group-hover:scale-105 transition-transform duration-700" />
        {project.honor && (
          <div className="absolute left-3 top-3 z-10 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold text-amber-200">
            🏆 {project.honor}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/20 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted line-clamp-3">
          {project.description}
        </p>
      </div>
    </GlassCard>
  );
}
