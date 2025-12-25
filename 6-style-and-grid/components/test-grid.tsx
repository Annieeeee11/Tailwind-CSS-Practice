import React from 'react'

const Grid = () => {
    return (
        <div className="max-w-7xl min-h-screen mx-auto border-x border-neutral-200 bg-gray-100">
            <div className='grid grid-cols-3 gap-10'>
                <div className='h-40 w-full shrink-0 bg-red-500 col-span-1' />
                <div className='h-40 w-full shrink-0 bg-green-500 col-span-2' />
                <div className='h-40 w-full shrink-0 bg-yellow-500 col-span-2' />
                <div className='h-40 w-full shrink-0 bg-orange-500 col-span-1' />
            </div>
        </div>
    )
}

export default Grid