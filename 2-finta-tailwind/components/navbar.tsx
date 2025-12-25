import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    const navItems = [
        {
            href: "/",
            label: "Guide"
        },
        {
            href: "/",
            label: "Price"
        },
        {
            href: "/",
            label: "Login"
        }
    ];

    return <div className="flex items-center justify-between py-4 px-4 w-full">
        <Link href="/">
            <Image src="/favicon.ico" alt="logo" width={50} height={50} draggable={false} loading="lazy" />
        </Link>
        <div className="flex items-center gap-8">
            {navItems.map((items, index) => (
                <Link key={index} href={items.href} className="text-neutral-800 font-medium hover:text-neutral-600 transition-durantion-200">
                    {items.label}
                </Link>
            ))}
            <button className="bg-blue-500 text-white text-sm text-shadow-md px-4 py-2 rounded-lg tracking-wide hover:bg-[#2262C7] transition-duration-200">
                Start for free
            </button>
        </div>
    </div>
}