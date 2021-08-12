import React from 'react'
import AppLink from './AppLink'

interface HeaderProps {}

const Header = () => {
    return (
        <header className="flex justify-between bg-gray-200 text-gray-700 px-6 py-4">
          <h1> Next.js Blog </h1>
            <nav className="flex space-x-6">
                <AppLink href="/contact" lable='Contact' />
                <AppLink href="/login" lable='Login' />
            </nav>
        </header>
    )
}

export default Header
