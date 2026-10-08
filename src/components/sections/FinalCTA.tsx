import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { mailtoHref, site } from "@/data/site";

export function FinalCTA() {
  const startHref = mailtoHref("Project inquiry");

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space">
      <div className="container-page">
        <Reveal>
          <p className="text-label text-muted">08 / Contact</p>
          <h2 id="contact-title" className="text-display mt-5 max-w-[16ch]">
            Have a problem worth solving?
          </h2>
          <p className="text-lead mt-8 max-w-xl">
            Tell us what you&rsquo;re trying to build, improve, automate or clarify.
          </p>

          {startHref ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={startHref}>Start a project</Button>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-12 items-center text-ink underline decoration-line-strong underline-offset-4 transition-colors duration-[var(--duration-fast)] hover:decoration-ink sm:px-2"
              >
                {site.email}
              </a>
            </div>
          ) : (
            // No contact channel is configured yet. Say so plainly instead of faking a form.
            <p
              role="status"
              className="mt-10 max-w-md rounded-md border border-line-strong bg-surface px-5 py-4 text-muted"
            >
              Direct contact details are being set up. Please check back shortly.
              {process.env.NODE_ENV === "development" ? (
                <span className="mt-2 block font-mono text-[0.8rem]">
                  Dev note: set NEXT_PUBLIC_CONTACT_EMAIL to enable this call to action.
                </span>
              ) : null}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
