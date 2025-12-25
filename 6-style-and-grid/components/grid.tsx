import { cn } from '@/lib/utils';
import React from 'react'

const Grid = () => {
    return (
        <div className="max-w-7xl py-20 min-h-screen mx-auto border-x border-neutral-200 bg-gray-100">
            <div className='grid grid-cols-1 lg:grid-cols-2 divide-x divide-y divide-neutral-200'>
                <Card>
                    <CardHeader>
                        <span>⛅️</span>
                        <CardTitle>LLM Model Selector</CardTitle>
                    </CardHeader>
                    <CardDescription>
                        Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps
                    </CardDescription>
                    <CardSkeleton className="flex items-center justify-center"><div>will complete later because im lazy</div></CardSkeleton>
                </Card>
                <Card>
                    <CardHeader>
                        <span>⛅️</span>
                        <CardTitle>LLM Model Selector</CardTitle>
                    </CardHeader>
                    <CardDescription>
                        Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps
                    </CardDescription>
                    <CardSkeleton> <MainSkeleton /> </CardSkeleton>
                </Card>
                <Card className='lg:col-span-2'>
                    <CardHeader>
                        <span>⛅️</span>
                        <CardTitle>LLM Model Selector</CardTitle>
                    </CardHeader>
                    <CardDescription>
                        Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps
                    </CardDescription>
                    <CardSkeleton className="flex items-center justify-center"><div>will complete later because im lazy</div></CardSkeleton>
                </Card>
            </div>
        </div>
    )
}

const MainSkeleton = () => {
    const chat = [{
        role: 'user',
        content: 'Hello, how are you?'
    }, {
        role: 'assistant',
        content: 'I am good, thank you! How can I help you today?'
    }, {
        role: 'user',
        content: 'I want to buy a new car'
    }, {
        role: 'assistant',
        content: 'I am sorry, I can not help you with that. I am a chatbot.'
    }, {
        role: 'user',
        content: 'I want to buy a new car'
    },];

    const Usermessage = ({ text }: { text: string }) => {
        return <div className='ml-auto flex justify-end items-start gap-2 bg-blue-500 rounded-tr-full rounded-tl-full rounded-br-lg rounded-bl-full p-2 w-fit'>
            <p className="text-sm text-white">{text}</p>
            <div className='rounded-full bg-gradient-r from-blue-500 to-purple-500 size-6' />
        </div>
    }
    const Aimessage = ({ text }: { text: string }) => {
        return <div className='flex mr-auto justify-start items-start gap-2 w-fit bg-white rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-lg p-2'>
            <div className='rounded-full shrink-0 bg-gradient-r from-green-500 to-emerald-500 size-6' />
            <p className="text-sm text-black">{text}</p>
        </div>
    }
    return (<div className='h-full w-full px-12 flex flex-col gap-4 relative z-20'>
        <input type="text" placeholder='Type your message here...' className='w-[calc(100%-4rem)] mx-auto absolute bottom-0 inset-x-0 px-4 text-xs bg-white rounded-md border border-neutral-200 placeholder-neutral-600' />
        {chat.map((text, index) => {
            return text.role === 'user' ? (
                <Usermessage text={text.content} key={index} />
            ) : (
                <Aimessage text={text.content} key={index} />
            );
        })}
    </div>);
};

const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return <div className={cn('bg-white p-4', className)}>{children}</div>
};

const CardSkeleton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={cn("h-60 w-full bg-gray-50 my-4 rounded-lg overflow-hidden",
        "bg-[radial-gradient(var(--color-neutral-100)_1px,transparent_1px)]",
        "bg-[size:10px_10px]",
        "mask-radial-from-40%", className)}>{children}</div>
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
    return <div className='flex items-center gap-2'>{children}</div>
};

const CardTitle = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return <h2 className={cn('font-medium text-lg tracking-tight', className)}>{children}</h2>
};

const CardDescription = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return <p className={cn('text-base text-neutral-400', className)}>{children}</p>
};

export default Grid;