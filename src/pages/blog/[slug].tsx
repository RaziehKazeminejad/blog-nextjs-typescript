/* eslint-disable react/no-children-prop */
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

interface BlogPostProps {
    content: string,
    frontmatter: {
        title: string,
        author: string,
        date:string
    }
}

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, content }) => {
    return (
        <Layout pageTitle={frontmatter.title}>
            <div>
            <div className="mx-40 ">
            <div className="px-4 pt-12 pb-12">
                <div className=" text-center">
                    <h1 className="font-serif font-semibold text-green-500 text-2xl pb-6">{frontmatter.title}</h1>
                    <h1 className="font-serif text-sm text-gray-400 pb-5">Author: {frontmatter.author}</h1>
                </div>
                <ReactMarkdown className="bg-green-50 p-10 rounded-xl" children={content} />
                </div>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync('src/_posts')
    const paths = files.map((fname) => ({
        params: {
            slug: fname.replace('.md', ''),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({params}) => {
    const slug = params?.slug
    const md = fs.readFileSync(path.join('src/_posts', `${slug}.md`)).toString()
    const {data, content, excerpt} = matter(md)
    const date = data.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    return {
        props: {
            frontmatter: {
                title: data.title,
                author: data.author,
                date,
            },
            excerpt,
            content,
        }
    }
}

export default BlogPost
