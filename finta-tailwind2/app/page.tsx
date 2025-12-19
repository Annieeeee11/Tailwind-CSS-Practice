import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center relative h-screen">
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#dbeafe_68.68%,#FFF_100%)]">
        <div className="max-w-5xl mx-auto px-4 md:py-8 absolute inset-0 h-full w-full">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent cursor-events-none z-0" />
          <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent cursor-events-none z-0" />
        </div>
        <Container >
          <Navbar />
          <Hero />
        </Container>
      </div>
    </div>
  );
}