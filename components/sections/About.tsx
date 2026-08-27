import Image from "next/image";
import { portfolio } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
  return (
    <section id="about" className="relative section-padding-compact">
      <video
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="pointer-events-none absolute inset-0 bg-bg-deep/70" />
      <div
        className="pointer-events-none absolute inset-0 dot-grid opacity-20"
        data-parallax
        data-speed="0.15"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading label="About" title="Who I am" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center" data-stagger>
          <div data-stagger-item className="shrink-0 self-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl lg:h-48 lg:w-48">
              <Image
                src="/images/professional.png"
                alt="Andrew Juers"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div data-stagger-item className="flex-1 space-y-4">
            <GlassCard className="!p-5">
              <p className="text-sm leading-relaxed text-text-muted md:text-base">
                {portfolio.summary}
              </p>
            </GlassCard>

            <div className="grid grid-cols-4 gap-2">
              {portfolio.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/8 bg-white/[0.02] px-2 py-3 text-center"
                >
                  <p className="font-display text-xl font-bold gradient-text md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] text-text-muted leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
