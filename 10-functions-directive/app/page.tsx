import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full max-w-4xl mx-auto pt-20 pb-10 px-4 md:px-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10 mask-b-from-50% p-1 rounded-3xl">
        <Column>
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/15/11/07/151107a5833d8c3f23e0e74ef90d747b.jpg"
            alt="Posthog"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/6c/f7/e8/6cf7e87283d270f1201143b02dedb099.jpg"
            alt="Something"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/15/11/07/151107a5833d8c3f23e0e74ef90d747b.jpg"
            alt="Something"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/736x/31/a3/fa/31a3fa5c391da8e1778582d4c6676d68.jpg"
            alt="Something"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/736x/e2/f8/02/e2f802a71ce7cc64667464234c959cc4.jpg"
            alt="Posthog"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/736x/31/a3/fa/31a3fa5c391da8e1778582d4c6676d68.jpg"
            alt="Something"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/736x/e2/f8/02/e2f802a71ce7cc64667464234c959cc4.jpg"
            alt="Posthog"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/736x/e2/f8/02/e2f802a71ce7cc64667464234c959cc4.jpg"
            alt="Posthog"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/15/11/07/151107a5833d8c3f23e0e74ef90d747b.jpg"
            alt="Posthog"
            className="lg:rounded-tl-[calc(24px-4px)]"
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/6c/f7/e8/6cf7e87283d270f1201143b02dedb099.jpg"
            alt="Something"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/15/11/07/151107a5833d8c3f23e0e74ef90d747b.jpg"
            alt="Something"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/736x/31/a3/fa/31a3fa5c391da8e1778582d4c6676d68.jpg"
            alt="Something"
            className=""
          />
        </Column>
        <Column>
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/15/11/07/151107a5833d8c3f23e0e74ef90d747b.jpg"
            alt="Posthog"
            className="lg:rounded-tl-[calc(24px-4px)]"
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/6c/f7/e8/6cf7e87283d270f1201143b02dedb099.jpg"
            alt="Something"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/1200x/15/11/07/151107a5833d8c3f23e0e74ef90d747b.jpg"
            alt="Something"
            className=""
          />
          <Card
            href="https://tailwindcss.com"
            src="https://i.pinimg.com/736x/31/a3/fa/31a3fa5c391da8e1778582d4c6676d68.jpg"
            alt="Something"
            className=""
          />
        </Column>
      </div>
    </div>
  );
}

const Card = ({
  src,
  alt,
  className,
  href,
}: {
  src: string;
  alt: string;
  className: string;
  href?: string;
}) => {
  return (
    <Link
      href={href || ""}
      target="_blank"
      className={cn("card overlay group rounded-md", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-auto object-cover"
      />
      <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 inset-0 text-white font-medium text-sm m-auto flex justify-center items-center">
        {href?.split("https://")[1]}
      </p>
    </Link>
  );
};

const Column = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Header = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
        Bento grids are cool, you should try it sometimes.
      </h1>
      <p className="text-base text-neutral-500 max-w-xl mt-4">
        Discover innovative solutions that transform the way you work and
        create. Our cutting-edge tools are designed to empower your creativity
        and boost your productivity like never before.
      </p>
    </div>
  );
};