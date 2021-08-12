import Head from 'next/head'
import React from 'react'
import AppLink from './AppLink'
import firebase from "firebase";

interface LayoutProps {
    pageTitle: string
}

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
    return (
        <>
            <Head>
                <title>Next.js | {pageTitle}</title>
            </Head>
            <div>
            <header className="flex justify-between bg-gray-200 text-gray-700 px-6 py-4">
                <AppLink href="/" lable="Next.js Blog" />
                <nav className="flex space-x-6">
                    <AppLink href="/blog" lable='Blogs' />
                    <AppLink href="/about" lable='About' />
                    <button
                    onClick={async () => {
                        await firebase.auth().signOut();
                        window.location.href = "/";
                    }}
                    >
                    Sign out
                    </button>
                </nav>
            </header>
            <main>
                {children}
            </main>
            </div>
        </>
    )
}

export default Layout