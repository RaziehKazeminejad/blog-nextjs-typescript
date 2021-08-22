import Link from 'next/link'
import React from 'react'

export default function LandingPage() {
  return (
    <div className="w-full flex flex-wrap pb-20 lg:px-20 md:py-20">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 lg:pt-36 ">
          <h2 className="text-gray-800 font-bold text-5xl leading-tight">
            Why This Blog ?
          </h2>
          <div className="flex flex-col md:pt-8">
            <div className="flex flex-col pt-4">
              <p className="text-gray-700 text-2xl">In this blog, we investigate technologies related to front end development.</p>
            </div>
            <div className="flex mt-10">
              <button type="button" className="bg-blue-500 text-white rounded-full hover:bg-blue-300 px-8 py-2 focus:outline-none mr-4">
                <Link href="/blog">Blog Posts</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 pt-5 lg:pt-28">
        <img className="object-cover w-full hidden md:block" src="https://www.bizzmine.com/images/articles/careers/Front-end-developer.png"/>
      </div>
    </div>
  )
}
