import React from "react";
import { PostsBlog } from "../../data/data";
import { TypeData } from "../../components/Posts";
import Layout from "../../components/Layout";
 

export default function postPage({  title, date, author, content }: TypeData) {
    return (
      <div>
        <Layout pageTitle='Blog' />
        <div>
          <div className="mx-40 ">
            <div className="px-4 pt-12 pb-12">
              <div className=" text-center">
                <h1 className="font-serif font-semibold text-green-500 text-2xl pb-6">{title}</h1>
                <h1 className="font-serif text-sm text-gray-400 pb-1">Author: {author}</h1>
                <h1 className="font-serif text-xs text-gray-400 pb-5">{date}</h1>
              </div>
              <div className="bg-green-50 p-10 rounded-xl">{content}</div>
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