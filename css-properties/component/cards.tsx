"use client";
import { cn } from '@/lib/utils';
import React from 'react';

const Card = () => {
    return (
        <div className={cn('w-full rounded-2xl min-h-100 bg-neutral-100 dark:bg-neutral-800',
            
            "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
            "bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
            "bg-[size:10px_10px]",
            "p-8 flex flex-col items-center justify-center group"
            )}>
                <h2 className={cn('text-2xl font-bold mt-8 mb-2 tracking-tight',
                    "text-neutral-800 dark:text-neutral-100 dark:text-shadow-neutral-600 text-shadow-sm text-shadow-neutral-300"
                )}>
                    Card scale made using Tailwind
                </h2>
                <p className='bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600 max-w-sm mx-auto text-sm text-center mb-8'>
                    This is a simple card component that uses the Tailwind CSS properties to create a card with a gradient background and a border.
                </p>
            <div className={cn('w-full rounded-2xl min-h-100 bg-neutral-100',
                "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
                "dark:bg-[radial-gradient(var(--color-neutral-600)_1px,transparent_1px)]",
                "bg-[size:10px_10px]",
                "size-90 bg-neutral-100 rounded-2xl border border-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 transition-all duration-200 group-hover:broder-neutral-300",
                "group-hover:bg-neutral-200 group-hover:border-neutral-600 dark:group-hover:bg-neutral-700",
                "shadow-2xl relative perspective-distant"
            )}>
                <img
                    src="https://i.pinimg.com/736x/1a/e0/28/1ae0289b4aa8103b3a313b5cd89444dc.jpg"
                    className={cn('h-full w-full object-cover rounded-2xl',
                        "transition-transform duration-300 ease-in-out",
                        "transform rotate-x-10 rotate-z-10 -rotate-y-10 translate-z-20",
                        "group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85"
                    )}
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default Card;