import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="bg-indigo-900">
                <div className="container mx-auto px-6 lg:px-20 py-12 text-white">
                    <div className="lg:flex">
                        <div className="w-full lg:w-2/3">
                            <div className="lg:flex">
                                <div className="w-full mb-12 lg:mb-0 lg:w-full ">
                                    <h2 className="font-bold text-xl mb-4">Blog</h2>
                                    <p>In this blog, we investigate technologies related to front end development.</p>
                                </div>
                                <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
                                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                        <h2 className="font-bold mb-4">Useful Links</h2>
                                        <ul className="text-sm">
                                            <li className="pt-1 pb-2">
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link href="/blog">Blogs</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link href="/about">About</Link>
                                            </li>
                                            <li className="pt-1 pb-2">
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-800" >
                <div className="container mx-auto px-6 lg:px-20 py-2 text-gray-400">
                    <div className="flex justify-center text-sm mb-1">
                        &copy;&nbsp;2021 All right reserved.
                    </div>
                    <div className="flex font-light justify-center text-xs">
                        <p>Designed by <span className="font-bold text-xs">Razieh KazemiNejad</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
