"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StarfieldBackdrop } from "@/components/three/StarfieldBackdrop";

const certifications = [
  "Machine Learning",
  "Generative AI & LLMs",
  "AI Agent Workflows",
  "Cloud Technologies",
  "Advanced Mobile Development",
];

const areasOfInterest = [
  "Future Mobile Devices — 2030s",
  "Machine Learning",
  "Generative AI",
];

export function Beyond() {
  return (
    <section id="beyond" className="relative overflow-hidden section-padding-compact">
      <StarfieldBackdrop />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="BEYOND CODE"
          title="Education & Continuous Learning"
        />

        <p className="mb-8 max-w-3xl text-base italic leading-relaxed text-text-muted md:text-lg">
          Academic background and ongoing development across mobile engineering, AI, and emerging technologies.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                  Bachelor / Computer Science
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                  Old Dominion University / Software Development
                </p>
              </div>

              <p className="text-sm text-text-muted">[2019 – 2021]</p>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-violet">
              Certifications &amp; Learning
            </h3>
            <ul className="space-y-2">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="mt-6">
          <GlassCard className="p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">
              Areas of Interest
            </h3>
            <ul className="grid gap-3 sm:grid-cols-3">
              {areasOfInterest.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-3 text-sm font-medium text-text-muted"
                >
                  <span className="text-accent-cyan">•</span> {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
