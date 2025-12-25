import { cn } from '@/lib/utils';
import React from 'react';

const Forms = () => {
    return (
        <form className='h-full w-full bg-gray-50 px-8 py-14'>
            <h1 className='text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-700 dark:from-neutral-100 dark:to-neutral-600 text-center'>
                {/* this is a <div className='relative inline-block'>
                    <span className='relative z-20 text-white'>crazy</span>
                    <span className='absolute inset-0 bg-red-500'></span>
                </div> shit form */}
                this is a <span className={cn('relative z-10 text-white inline-block',
                    'after:content-[""] after:-z-10 after:-w-full after:absolute after:inset-0 after:h-full after:bg-red-500 after:-skew-2'
                )}>crazy</span> shit form
            </h1>
            <div className='my-12 flex flex-col gap-8 max-w-sm mx-auto'>
                <Group>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                        disabled
                        id="firstname"
                        type="text"
                        placeholder="Enter your name"
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </Group>

                <Group>
                    <Label
                        htmlFor="email"
                        className="after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="invalid:border-red-500 invalid:shadow-none"
                    />
                </Group>

                <Group>
                    <Label
                        htmlFor="company"
                        className="after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                        Company
                    </Label>
                    <Input
                        id="company"
                        type="text"
                        placeholder="Enter your company name"
                    />
                </Group>

                <Group>
                    <Label
                        htmlFor="message"
                        className="after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                        Message
                    </Label>
                    <Input id="message" type="text" placeholder="Enter your message" />
                </Group>
                <button className="bg-black hover:bg-neutral-700 transition-all duration-150 text-white px-4 py-2 rounded-md cursor-pointer hover:-translate-y-0.5 active:scale-98 after:content-[''] after:w-1/2 after:h-[400px] after:absolute after:bg-white/10 relative overflow-hidden after:-left-20 after:-top-20 after:rotate-10 after:-translate-x-20 hover:after:translate-x-[200%] after:backdrop-blur-[0.5px] after:transition-all after:duration-200">
                    Send that text now
                </button>
            </div>
        </form>
    )
}

export default Forms;

const Group = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col gap-2 has-invalid:bg-red-50 rounded-md p-2",
                className
            )}
        >
            {children}
        </div>
    );
};


const Label = ({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
    return (
        <label {...props} className={cn("text-neutral-700 font-medium", className)}>
            {children}
        </label>
    );
};

const Input = ({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            className={cn(
                "focus:outline-none border focus:ring-2 focus:ring-gray-300 focus:ring-offset-4 focus:bg-gray-100 focus:border-gray-300 border-transparent px-4 py-2 bg-white rounded-lg shadow-input transition-all duration-200 placeholder:text-neutral-300",
                className
            )}
        />
    );
};