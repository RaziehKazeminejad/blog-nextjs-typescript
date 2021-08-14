import React from "react";
import { NextPage } from "next"
import Layout from "../components/Layout"
import PostPreview from "../types/PostPreview"
import fs from 'fs'
import matter from 'gray-matter'
import PostListing from "../components/PostListing"
import nookies from "nookies";
import { firebaseAdmin } from "../lib/firebaseAdmin";
import { GetServerSidePropsContext } from "next";
import Footer from "../components/Footer";

interface BlogProps {
    posts: PostPreview[]
  }

const Blogs: NextPage<BlogProps> = ({posts}) => {

    return (
        <div>
            <Layout pageTitle='Blog' />
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-lg py-20">
                <PostListing posts={posts} />
              </div>
            </div>
            <Footer />
        </div>
      )
}

export default Blogs

export const getServerSideProps = async ( ctx: GetServerSidePropsContext ) => {
  try{
    const cookies = nookies.get(ctx);
    console.log(JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;
  //   const files = fs.readdirSync('src/_posts')
  //   const posts = files.map((fname) => {
  //   const md = fs.readFileSync(`src/_posts/${fname}`).toString()
  //   const {data, excerpt} = matter(md, {excerpt_separator:'\n\n'})
  //   return {
  //     slug: fname.replace('.md', ''),
  //     title: data.title,
  //     excerpt,
  //     message: `Your email is ${email} and your UID is ${uid}.`
  //   }
  // })
  return {
    props: {
      message: `Your email is ${email} and your UID is ${uid}.`
      // posts
    }
  }
  }catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {} as never,
    };
  }
}
