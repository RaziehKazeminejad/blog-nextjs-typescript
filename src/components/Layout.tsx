import Head from 'next/head'
import React, { useState } from 'react'
import AppLink from './AppLink'
import firebase from "firebase";

interface LayoutProps {
    pageTitle: string
}

const Layout: React.FC<LayoutProps> = ({pageTitle}) => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Next.js | {pageTitle}</title>
            </Head>
            <div>
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
                                    <AppLink href="/blog" lable='Blogs' />
                                </li>
                                <li className="nav-item">
                                    <AppLink href="/about" lable='About' />
                                </li>
                                <li className="nav-item">
                                    <button
                                    className="px-3 py-2 flex items-center text-xs lg:text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                                    onClick={async () => {
                                        await firebase.auth().signOut();
                                        window.location.href = "/";
                                    }}
                                    >
                                        LogOut
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Layout