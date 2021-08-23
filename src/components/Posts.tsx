import React from "react";
import Link from "next/link";
 
export interface TypeData {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
}
 
export default function Posts({ id, title, date, author }: TypeData) {
  return (
    <div>
      <Link href={`/blog/${id}`}>
        <a>
          <img alt="Placeholder" className="block h-auto w-full" src="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/14144/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" />
        </a>
      </Link>
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <Link href={`/blog/${id}`}>
          <a className=" hover:text-blue-700 text-black">
            <h3 className="text-xl">{title}</h3>
          </a>
        </Link>
        <div className="text-grey-darker text-sm">{date}</div>
      </header>
      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <div className="flex items-center text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="ml-2 text-sm">Author: {author}</p>
        </div>          
      </footer>
    </div>
  );
}