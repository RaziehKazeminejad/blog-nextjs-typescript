import React from 'react'

const contact = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row md:my-48">
                <div className="flex flex-col w-full lg:w-1/3 p-8 lg:pl-48">
                    <div className="text-sm pb-10 tracking-loose underline font-serif">
                        <a href="/">Back to Home</a>
                    </div>
                    <p className="text-3xl font-bold font-serif md:text-5xl mb-10 leading-relaxed md:leading-snug">Contact us</p>
                    <p className="text-sm font-serif md:text-base leading-snug text-opacity-100">Please provide your valuable feedback. Fill in the form to start a conversation :)</p>
                </div>
                <div className="flex flex-col w-full lg:w-2/3 justify-center">
                    <div className="container w-full px-4">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col text-white min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-700">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl mb-4 font-semibold">Have a suggestion?</h4>
                                        <form id="feedbackForm" action="" method="">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-xs font-bold mb-2">Email</label>
                                                <input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none" required />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-xs font-bold mb-2">Message</label>
                                                <textarea name="feedback" id="feedback" className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full" placeholder="" required></textarea>
                                            </div>
                                            <div className="text-center mt-6">
                                                <button id="feedbackBtn" className="bg-indigo-500 text-white text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition: all 0.15s ease 0s;" type="submit" >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact
