import React from 'react'
import Link, {LinkProps} from 'next/link'

interface AppLinkProps extends LinkProps {
    lable: string
}

const AppLink: React.FC<AppLinkProps> = ({href, lable}) => {
    return (
        <div>
            <Link href={href}>
                <a className="px-3 py-2 flex items-center text-xs lg:text-sm uppercase font-bold leading-snug text-white hover:opacity-75">{lable}</a>
            </Link>
        </div>
    )
}

export default AppLink
