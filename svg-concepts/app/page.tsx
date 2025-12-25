import { SVGComponent } from "@/components/SVGComponent";
import { SVGLines } from "@/components/line-motion";

export default function Home() {
  return (
    <main className="h-screen bg-gray-50 max-w-4xl mx-auto flex items-center flex-col gap-20 py-20">
      <SVGComponent /> 
      <SVGLines />
    </main>
  );
}
