import { Button } from "@/components/ui/Button";
import { HeroField } from "@/components/ui/HeroField";
import { site } from "@/data/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="text-label rise text-accent" style={delay(0)}>
            {site.name} · {site.descriptor}
          </p>
          <h1 id="hero-title" className="text-display rise mt-6 max-w-[14ch]" style={delay(80)}>
            We build digital solutions for growing businesses.
          </h1>
          <p className="text-lead rise mt-8 max-w-xl" style={delay(160)}>
            Websites, business software, automation and design, shaped around what your business
            actually needs.
          </p>
          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={delay(240)}>
            <Button href="#contact">Start a project</Button>
            <Button href="#work" variant="secondary">
              View our work
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <HeroField />
        </div>
      </div>
    </section>
  );
}
