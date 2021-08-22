import React, { useState } from 'react'
import AppLink from './AppLink'

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <AppLink href="/" lable='Next.js Blog' />
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div
                className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <AppLink href="/contact" lable='Contact' />
                        </li>
                        <li className="nav-item">
                            <AppLink href="/login" lable='Login' />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    )
}

