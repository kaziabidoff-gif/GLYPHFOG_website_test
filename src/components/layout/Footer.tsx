import { cacheLife } from "next/cache";
import { GlyphMark } from "@/components/ui/GlyphMark";
import { capabilities } from "@/data/capabilities";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";

const columnTitle = "text-label text-muted";
const link =
  "inline-flex min-h-9 items-center text-[0.95rem] text-ink transition-colors duration-[var(--duration-fast)] hover:text-accent";

/** Cached so the current time is never read during prerender. */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-sunken">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <GlyphMark />
              <span className="text-[0.95rem] font-semibold tracking-[0.14em]">{site.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-muted">
              Practical digital solutions built around real business needs.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <div>
              <h2 className={columnTitle}>Navigate</h2>
              <ul className="mt-4 flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={columnTitle}>Capabilities</h2>
              <ul className="mt-4 flex flex-col">
                {capabilities.map((capability) => (
                  <li key={capability.id}>
                    <a href="#capabilities" className={link}>
                      {capability.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2 className={columnTitle}>Contact</h2>
              <ul className="mt-4 flex flex-col">
                {site.email ? (
                  <li>
                    <a href={`mailto:${site.email}`} className={link}>
                      {site.email}
                    </a>
                  </li>
                ) : (
                  <li>
                    <a href="#contact" className={link}>
                      Start a project
                    </a>
                  </li>
                )}
                <li className="inline-flex min-h-9 items-center text-[0.95rem] text-muted">
                  {site.location}
                </li>
                {site.social.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={link} rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-label text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {site.name}
          </p>
          <p aria-hidden="true">Complexity → Structure → Clarity</p>
        </div>
      </div>
    </footer>
  );
}
