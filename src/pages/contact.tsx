import React from 'react'

const contact = () => {
    return (
        <div className="lg:flex pr-60 items-center lg:text-left w-full justify-between mt-16 text-center">
            <div className="pl-40">
                <div className=" rounded-lg  px-16 py-16">
                    <form className="w-full max-w-lg">
                        <h2 className="text-2xl text-center text-green-700 mb-10 font-serif">Contact Us</h2>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-green-100 rounded py-3 px-4 leading-tight focus:outline-none focus:border-green-200" id="grid-last-name" type="text" placeholder="John" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-green-100 rounded py-3 px-4 leading-tight focus:outline-none focus:border-green-200" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    E-mail
                                </label>
                                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-green-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-green-200" id="email" type="email" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Message
                                </label>
                                <textarea className=" no-resize appearance-none block w-full bg-green-50 text-gray-700 border border-green-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-green-200 h-48 resize-none" id="message"></textarea>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button className="shadow bg-green-400 hover:bg-green-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-8 lg:mt-0 ">
            <img className="w-full h-96 " src="https://stories.freepiklabs.com/storage/12682/blog-post-bro-828.png" alt=""/>
            </div>
        </div>
    )
}

export default contact
