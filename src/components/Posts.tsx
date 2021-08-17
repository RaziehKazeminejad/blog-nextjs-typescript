import React from "react";
import Link from "next/link";
 
export interface TypeData {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
}
 
function Posts({ id, title, date, author }: TypeData) {
  return (
        <div>
          <Link href={`/blog/${id}`}>
            <a>
              <h3 className="text-green-600 text-xl font-serif hover:text-green-400">{title}</h3>
            </a>
          </Link>
          <div>{date}</div>
          <div className="text-sm text-gray-500">Author: {author}</div>
        </div>
  );
}
 
export default Posts;