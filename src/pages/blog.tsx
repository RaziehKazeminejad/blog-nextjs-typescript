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
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg py-20">
            <div className="flex flex-row">
              {PostsBlog.map((item: TypeData) => (
                <div className="mx-10 bg-green-50 bg-cover bg-center rounded-lg">
                  <div className="px-4 pt-12 pb-12">
                    <div className="flex flex-row" key={item.id}>
                      <Posts {...item} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
