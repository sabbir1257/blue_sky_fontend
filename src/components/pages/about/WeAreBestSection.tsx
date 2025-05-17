/* eslint-disable @next/next/no-img-element */
import { CustomerCareIcon, PresentationIcon, PuzzleIcon } from '@/components/Icons/Icons'
import TotalAnalysis from '@/components/shared/TotalAnalysis'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Separator from '@/components/ui/Separator'
import React from 'react'

const WeAreBestSection = () => {
    return (
        <div className="relative w-full h-[75vh] mb-72 parallax"
            style={{
                backgroundImage: "url('/images/land3.jpg')"
            }}
        >
            <div className="absolute top-0 w-full h-full bg-[#203e7fd6]">
                <Container className="w-full h-full flex justify-center flex-col gap-5 items-center">
                    <div className='text-white mt-10 flex flex-col items-center gap-5'>
                        <h1 className="text-4xl font-bold">WE ARE ALWAYS BEST</h1>
                        <Separator />
                        <p className="text-xl text-gray-300">A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
                    </div>
                    <div className='bg-white shadow-md rounded-md -mb-64 my-10 w-full max-h-[800px] lg:max-h-[500px] h-full'>
                        <div className='flex lg:flex-row flex-col gap-5 justify-between w-full h-full'>
                            <div className='lg:flex-1 flex justify-center lg:items-center h-full'>
                            <div className='flex-1 p-5 flex flex-col items-center gap-8'>
                                <div className='flex gap-5 items-center'>
                                    <PuzzleIcon className='text-8xl' />
                                    <div>
                                        <h1 className='text-2xl font-semibold'>Best Strategy</h1>
                                        <p className='paragraph mt-1'>The Love Boat soon will be making another run plore strange tools enter new worlds.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <PresentationIcon className='text-8xl' />
                                    <div>
                                        <h1 className='text-2xl font-semibold'>Best Strategy</h1>
                                        <p className='paragraph mt-1'>The Love Boat soon will be making another run plore strange tools enter new worlds.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <CustomerCareIcon className='text-8xl' />
                                    <div>
                                        <h1 className='text-2xl font-semibold'>Best Strategy</h1>
                                        <p className='paragraph mt-1'>The Love Boat soon will be making another run plore strange tools enter new worlds.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='lg:flex-1'>
                                <img className='w-full rounded-r-md object-fill h-full' src="/images/about.jpg" alt="land" />
                            </div>
                        </div>
                    </div>

                </Container>

            </div>
        </div>
    )
}

export default WeAreBestSection
