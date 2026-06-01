import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Process } from "@/components/sections/Process";
import { Difference } from "@/components/sections/Difference";
import { Therapies } from "@/components/sections/Therapies";
import { ProvenModel } from "@/components/sections/ProvenModel";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Programs />
      <Process />
      <Difference />
      <Therapies />
      <ProvenModel />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
