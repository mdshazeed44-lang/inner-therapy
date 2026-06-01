import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-[70vh] grid place-items-center bg-plum text-center">
        <div className="container-x flex flex-col items-center gap-6">
          <span className="font-display text-cream text-7xl">404</span>
          <h1 className="font-sans font-light text-display-md text-white">
            This page is off-protocol.
          </h1>
          <p className="text-stone">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button href="/" variant="light">
            Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
