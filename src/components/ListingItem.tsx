import React from 'react'
import PostPreview from '../types/PostPreview'
import AppLink from './AppLink'

interface ListingItemProps {
    post: PostPreview
}

const ListingItem: React.FC<ListingItemProps> = ({post}) => {
    return (
        <div className="">
            <div className="mx-10 bg-green-50 bg-cover bg-center rounded-lg">
                <div className="px-4 pt-12 pb-12">
                    <AppLink href={`/blog/${post.slug}`} lable={post.title} />
                    <div className="text-gray-900">
                        {post.excerpt && <p>{post.excerpt}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingItem
