import Image from "next/image"
import Link from "next/link"

export const Hero = () => {

    return <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
            <Link href="/">
                <Image src="/favicon.ico" alt="logo" width={100} height={100} className="h-12 w-12" />
            </Link>
            <div className="flex items-center">
                <span className="text-sm px-4 py-1 item-center hover:text-shadow-amber-50 cursor-pointer text-white">
                    Blog
                </span>
                <button className="text-sm text-white px-4 py-1.5 bg-zinc-950 border border-neutral-600 rounded-full shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all duration-30 cursor-pointer items-center">
                    Join waiting list
                </button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center my-20">
            <h1 className="text-7xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-500 max-w-2xl leading-tight">Unleash the power of intuitive finance</h1>
            <p className="text-xl mx-auto text-center max-w-2xl text-neutral-300 mt-6">Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.</p>
            {/* <div className=""> */}
                <button className="text-sm px-4 text-white py-1.5 mt-15 bg-zinc-950 border border-neutral-700 rounded-full shadow-cyan-400/20 hover:shadow-sky-600 transition-all duration-30 cursor-pointer items-center relative">
                    <div className="absolute bottom-0 inset-x-0 w-full h-px bg-linear-to-r from-transparent via-sky-600 to-transparent" />
                    Join waiting list
                </button> 
                <div className="text-sm px-4 py-1 mt-5 text-white hover:text-shadow-amber-50 item-center cursor-pointer">
                    Learn more
                </div>
            {/* </div>  */}
        </div>
    </div>
}