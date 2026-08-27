"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, Component, ReactNode } from "react";
import { portfolio } from "@/content/portfolio";
import { Button } from "@/components/ui/Button";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { scrollToSection } from "@/hooks/useLenisSmooth";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false, loading: () => <HeroFallback /> }
);

function HeroFallback() {
  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bg-deep via-bg-surface to-bg-deep" />
  );
}

class SceneErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <HeroFallback />;
    return this.props.children;
  }
}

const heroLines = [
  "Building",
  <span key="future" className="universe-light">Future</span>,
  <span key="of-mobile">of <span className="electrical-spectrum">Mobile</span></span>,
  <span key="with-ai">with <span className="electrical-spectrum">AI</span></span>,
];

const heroTags = [
  "Android App Architecture",
  "iOS App Architecture",
  "Cross-Platform Mobile Architecture",
  "Backend & API Integration",
  "AI Agents",
  "LLMs",
  "Computer Vision",
  "Speech AI",
  "Voice AI",
];

export function Hero() {  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setMounted(true);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-28 section-padding-compact md:pb-24"
    >
      {mounted && !isMobile && (
        <SceneErrorBoundary>
          <HeroScene />
        </SceneErrorBoundary>
      )}
      {(!mounted || isMobile) && <HeroFallback />}

      <div className="pointer-events-none absolute inset-0 -z-5" data-parallax data-speed="0.15">
        <div className="absolute -left-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/8 blur-[140px]" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-accent-violet/8 blur-[120px]" />
      </div>

      <div className="hero-mobile-art pointer-events-none absolute right-0 top-0 hidden h-[48vh] w-[30%] -z-20 lg:block">
        <img src="/images/hero-mobile-ai.png" alt="Mobile with AI" className="h-full w-full object-contain object-right-top" />
      </div>




      <div data-hero-content className="relative z-20 mx-auto w-full max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.35em] text-text-muted">
          ANDREW JUERS
        </p>

        <SplitHeadline
          lines={heroLines}
          accentIndices={[0, 1]}
          className="text-[clamp(2.75rem,9vw,7rem)]"
        />

        <p className="mt-8 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
          Lead Mobile &amp; AI Developer — Mobile Architecture · Backend &amp; API Architecture · AI Agents · Computer Vision · Speech &amp; Voice AI · Cloud &amp; APIs.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button onClick={() => scrollToSection("#contact")}>Let&apos;s talk</Button>
          <Button
            href={portfolio.contact.resumeUrl}
            variant="secondary"
            download="Resume.pdf"
          >
            Download CV
          </Button>
          <Button onClick={() => scrollToSection("#projects")} variant="ghost">
            View work ↓
          </Button>
        </div>

        <div className="mt-14 overflow-hidden border-y border-white/8 py-3">
          <div className="hero-tags-track flex w-max gap-8">
            {[...heroTags, ...heroTags].map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="shrink-0 text-xs uppercase tracking-[0.25em] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
