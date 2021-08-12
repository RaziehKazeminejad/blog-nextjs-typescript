import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="bg-gray-200">
                <div className="container mx-auto px-6 lg:px-20 py-12">
                    <div className="lg:flex">
                        <div className="w-full lg:w-2/3">
                            <div className="lg:flex">
                                <div className="w-full mb-12 lg:mb-0 lg:w-full">
                                    <h2 className="font-bold text-xl text-gray-500 mb-4">Blog</h2>
                                    <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ex nulla, quis aliquet massa sodales vel. Duis sit amet tristique turpis. Mauris id dapibus sem, eu rhoncus nunc. Fusce ultricies, metus eget porttitor bibendum, diam elit auctor erat, vel finibus massa justo eu purus. Maecenas tincidunt vestibulum dolor. Phasellus efficitur sem eget velit gravida rhoncus. Aliquam pulvinar nec neque id ultrices. Vivamus et rhoncus elit. Vivamus pellentesque, ligula a fringilla accumsan, magna tellus tincidunt metus, non suscipit purus lorem ac est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum varius augue vitae dignissim. Suspendisse nibh dolor, vestibulum ac metus vel, venenatis ultricies sapien.
                                    </p>
                                </div>
                                <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
                                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                        <h2 className="text-gray-500 font-bold">
                                            Useful Links</h2>
                                        <ul className="text-gray-500 text-sm">
                                            <li className="pt-1 pb-2">
                                                <Link href="/">Home</Link>
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
            <div className="bg-gray-100" >
                <div className="container mx-auto px-6 lg:px-20 py-2">
                    <div className="flex justify-center text-gray-400 text-sm mb-1">
                        &copy;&nbsp;2021 All right reserved.
                    </div>
                    <div className="flex font-light justify-center text-gray-500 text-xs">
                        <p>Designed by <span className="font-bold text-xs">Razieh KazemiNejad</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
