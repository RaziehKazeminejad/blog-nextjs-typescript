import React from "react";
import { PostsBlog } from "../data/data";
import Posts from "../components/Posts";
import { TypeData } from "../components/Posts";
import { firebaseAdmin } from "../lib/firebaseAdmin";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
 
const blogs = () => {
    return (
      <div>
        <Layout pageTitle='Blog' />
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {PostsBlog.map((item: TypeData) => (
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <div key={item.id}>
                      <Posts {...item} />
                    </div>
                  </article>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    );
};
export default blogs

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    console.log(JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {} as never,
    };
  }
};
