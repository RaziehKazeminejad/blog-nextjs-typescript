/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function LandingPage() {
    return (
        <div>
            <div className="container mx-auto px-6 pb-12 lg:px-20 ">
                <div className="flex z-0" >
                    <div className="lg:w-1/2 mt-24">
                        <h2 className="text-gray-800 font-bold text-5xl leading-tight mb-4">
                        why this Blog ???
                        </h2>
                        <p className="text-gray-700 text-2xl">In this blog, we investigate technologies related to front end development.</p>
                        <div className="flex mt-10">
                            <button type="button" className="bg-green-500 text-white rounded-full hover:bg-green-300 px-8 py-2 focus:outline-none mr-4">
                                <Link href="/blog">Blog Posts</Link>
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="-mt-12">
                            <img src="/assets/img/hero-img.png" alt="" className="relative" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
