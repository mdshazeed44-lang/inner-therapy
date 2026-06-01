import { measure, therapies } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { TherapyCard } from "@/components/ui/TherapyCard";

export function Therapies() {
  return (
    <section className="bg-plum text-sand py-24 md:py-28">
      <div className="container-x">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow">{measure.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="font-sans font-light text-display-md text-white max-w-3xl mx-auto mt-4">
              {measure.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-stone max-w-4xl mx-auto text-center mt-6 leading-relaxed">
              {measure.body}
            </p>
          </Reveal>
        </div>

        {/* Interactive therapy cards — hover expand + scroll parallax stagger + glare */}
        <div className="mt-16 grid grid-cols-2 items-stretch gap-5 md:flex md:flex-row">
          {therapies.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.07} className="md:flex-1">
              <TherapyCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
