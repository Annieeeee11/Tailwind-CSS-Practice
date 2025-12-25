import Link from "next/link";

export const Hero = () => {
    return (
        <div className="px-4 py-2 text-center flex-col w-full my-20">
            <Link href="/" className="border border-neutral-200 px-4 py-1 rounded-full bg-[rgba(30,31,37,0.04)]">
                We are hiring founding Ruby Engineers?
            </Link>
            <div>
                <h1 className="mt-10 text-7xl text-bold font-medium text-center tracking-tight ">Magically simplify <br/> accounting and taxes</h1>
                <p className="text-xl text-center text-neutral-600 mt-6 max-w-2xl mx-auto">Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 6:26pm.</p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-10">
            <button className="bg-blue-500 text-white text-sm text-shadow-md px-4 py-2 rounded-lg tracking-wide cursor-pointer hover:bg-[#2262C7] transition-duration-200">
                Start for free
            </button>
            <button className="text-black text-sm px-4 py-2 rounded-lg tracking-wide cursor-pointer hover:bg-[#e5e5e5] transition-duration-200">
                Pricing
            </button>
            </div>
            <p className="text-neutral-600 text-sm mt-4">For US-based startups.</p>
        </div>
    );
};