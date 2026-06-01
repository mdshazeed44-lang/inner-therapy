import { provenModel } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ProvenModel() {
  return (
    <section className="bg-cocoa text-sand py-24 md:py-28">
      <div className="container-x">
        <div className="text-center">
          <Reveal dir="up">
            <p className="eyebrow">{provenModel.eyebrow}</p>
          </Reveal>
          <Reveal dir="up" delay={0.1}>
            <h2 className="font-sans font-light text-display-md text-white mt-4">
              {provenModel.title}
            </h2>
          </Reveal>
          <Reveal dir="up" delay={0.2}>
            <p className="text-stone max-w-4xl mx-auto text-center mt-6 leading-relaxed">
              {provenModel.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <div className="space-y-8">
              {provenModel.points.map((point, i) => (
                <Reveal key={point.title} dir="up" delay={0.1 * i}>
                  <div>
                    <h3 className="font-sans font-extrabold text-cream text-lg">
                      {point.title}
                    </h3>
                    <p className="text-sand/90 mt-2 leading-relaxed text-[15px]">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal dir="up" delay={0.2}>
              <div className="mt-8">
                <Button href={provenModel.cta.href} variant="light">
                  {provenModel.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <Reveal dir="left" delay={0.15}>
            <div className="relative">
              <div
                className="rounded-[20px] bg-coffee bg-cover bg-center aspect-[4/5] w-3/4"
                style={{ backgroundImage: `url('${provenModel.images[0]}')` }}
              />
              <div
                className="absolute -bottom-6 right-0 w-1/2 rounded-[20px] bg-coffee bg-cover bg-center aspect-square ring-4 ring-cocoa"
                style={{ backgroundImage: `url('${provenModel.images[1]}')` }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
