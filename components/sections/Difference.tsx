import { difference } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Difference() {
  return (
    <section className="relative overflow-hidden bg-cocoa">
      {/* arched-top image band (Figma dome top). The cocoa section bg shows in the
          top corners, so the blurred two-faces image reads as a curved dome. */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          borderTopLeftRadius: "50% 90px",
          borderTopRightRadius: "50% 90px",
        }}
      >
        {/* two-faces image — natural fit, biased to the faces, soft blur (Figma).
            -inset over-fills so the blur leaves no edge gaps. */}
        <div
          className="absolute -inset-6 bg-cover bg-[center_30%] bg-coffee blur-[3px]"
          style={{ backgroundImage: `url(${difference.image})` }}
        />
        {/* overlay so the text reads, without washing the image out */}
        <div className="absolute inset-0 bg-noir/45" />
        {/* TOP fade — hides the light/grey strip at the arch edge by blending the
            image into the cocoa dome */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cocoa via-cocoa/75 to-transparent" />
        {/* slim bottom blend with the section below */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-plum/60 to-transparent" />
      </div>

      <div className="container-x relative grid items-center gap-14 py-32 md:py-40 lg:grid-cols-2">
        {/* LEFT — eyebrow · title · body (Figma left column) */}
        <div className="max-w-[520px]">
          <Reveal>
            <span className="eyebrow">{difference.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            {/* Figma breaks the title into three lines, one sentence each */}
            <h2 className="mt-4 font-sans text-[clamp(1.9rem,3.2vw,2.625rem)] font-normal leading-[1.18] text-white">
              {difference.title.split(". ").map((line, i, arr) => (
                <span key={i} className="block">
                  {line}
                  {i < arr.length - 1 ? "." : ""}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8">
              <Button href="/book" variant="glass">
                Book Appointment
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-sand/90">
              {difference.body}
            </p>
          </Reveal>
        </div>

        {/* RIGHT — 5 items: bold title · body (Figma right column, no markers) */}
        <ul className="space-y-8">
          {difference.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <li>
                <h3 className="font-sans text-[18px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[34rem] text-[15px] leading-relaxed text-white/85">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
