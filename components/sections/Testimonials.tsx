import { results, testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const STAGGER = [0, 28, 56];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-plum py-24 text-sand md:py-32">
      {/* soft warm glow behind the heading */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(195,186,173,0.10),transparent)]" />

      <div className="container-x relative">
        {/* Header */}
        <Reveal dir="up">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[13px] font-bold text-plum">
                G
              </span>
              <span className="text-[15px] font-extrabold text-white">
                {results.rating}
              </span>
              <span className="text-[13px] tracking-[0.15em] text-gold">★★★★★</span>
            </span>
            <h2 className="mt-6 font-sans text-display-md font-light text-white">
              {results.title}
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-16 flex flex-col items-stretch gap-6 md:flex-row">
          {testimonials.map((item, i) => {
            const featured = i === 1;
            return (
              <Reveal key={item.name} delay={i * 0.08} dir="up" className="w-full flex-1">
                <figure
                  style={{ marginTop: STAGGER[i] }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[18px] p-8 backdrop-blur transition-all duration-500 ease-out hover:-translate-y-1.5 ${
                    featured
                      ? "border border-cream/25 bg-white/[0.08] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
                      : "border border-white/10 bg-white/[0.04] hover:border-cream/25 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.55)]"
                  }`}
                >
                  {/* oversized watermark quote */}
                  <span className="pointer-events-none absolute -right-1 -top-5 select-none font-display text-[120px] leading-none text-cream/[0.06]">
                    &rdquo;
                  </span>

                  <div className="relative flex items-center justify-between">
                    <span className="font-display text-4xl leading-none text-cream/80">
                      &ldquo;
                    </span>
                    <span className="text-[13px] tracking-[0.12em] text-gold">★★★★★</span>
                  </div>

                  <blockquote className="relative mt-6 flex-1 text-[15.5px] leading-relaxed text-sand/90">
                    {item.quote}
                  </blockquote>

                  <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream/15 text-[13px] font-bold text-cream transition-colors duration-500 group-hover:bg-cream/25">
                      {initials(item.name)}
                    </span>
                    <div>
                      <figcaption className="text-sm font-extrabold text-white">
                        {item.name}
                      </figcaption>
                      <p className="mt-0.5 text-xs text-cream/70">{item.role}</p>
                    </div>
                  </div>
                </figure>
              </Reveal>
            );
          })}
        </div>

        {/* Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={
                i === 0
                  ? "h-2 w-6 rounded-full bg-cream"
                  : "h-2 w-2 rounded-full bg-cream/40"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
