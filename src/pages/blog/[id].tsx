import React from "react";
import { PostsBlog } from "../../data/data";
import { TypeData } from "../../components/Posts";
import Layout from "../../components/Layout";
import Image from "next/image";
import PostsImage from "../../../public/Posts.png"

export default function postPage({  title, date, author, content }: TypeData) {
    return (
      <div>
        <Layout pageTitle='Blog' />
        <div className="grid place-items-center h-screen">
          <div className="flex flex-col gap-11 py-10 px-5 bg-white rounded-md  md:max-w-2xl">
            <div className="text-indigo-500 flex flex-col justify-between">
              <Image src={PostsImage} alt="PostsImage" />
            </div>
            <div>
              <h3 className="uppercase font-serif font-semibold text-black text-2xl pb-3">{title}</h3>
              <p className="font-serif text-sm text-gray-400 pb-2">Author: {author}</p>
              <p className="font-serif text-xs text-gray-400 mb-10">{date}</p>
              <p className="text-black">{content}</p>
            </div>
          </div>
        </div>
        
      </div>
    );
}
export async function getStaticProps(context: { params: TypeData }) {
  const { params } = context;
  return {
    props: PostsBlog.find((item) => item.id === params.id),
  };
}

export const getStaticPaths = async () => {
 return {
   paths: PostsBlog.map((item) => ({
     params: {
       id: item.id,
     },
   })),
   fallback: false,
 };
};