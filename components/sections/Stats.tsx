import { stats } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="bg-plum text-sand pb-8 pt-4 md:pb-16">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="flex flex-col gap-3">
                <span className="h-12 w-12 rounded-full border border-cream/40 grid place-items-center text-cream">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3.5 3.5M15.5 15.5L19 19M19 5l-3.5 3.5M8.5 15.5L5 19" />
                  </svg>
                </span>
                <span className="font-sans font-extrabold text-cream text-5xl md:text-6xl leading-none">
                  {stat.value}
                </span>
                <span className="text-cream/90 text-[15px] leading-snug max-w-[12rem]">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
