import React from 'react'
import Link, {LinkProps} from 'next/link'

interface AppLinkProps extends LinkProps {
    lable: string
}

const AppLink: React.FC<AppLinkProps> = ({href, lable}) => {
    return (
        <div>
            <Link href={href}>
                <a className="block rounded-md">{lable}</a>
            </Link>
        </div>
    )
}

export default AppLink
