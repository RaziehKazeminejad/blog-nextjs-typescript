import React from 'react'
import Layout from "../components/Layout"
import nookies from "nookies";
import { firebaseAdmin } from "../lib/firebaseAdmin";
import { GetServerSidePropsContext } from "next";
import Footer from '../components/Footer';

interface aboutProps {}

const about = () => {

  return (
    <div>
      <Layout pageTitle='About' />
      <div className="flex justify-center items-center mb-36">
        <div className="bg-white rounded-lg px-16 py-16">
          <h2 className="text-4xl text-center text-indigo-700 mb-16 font-serif">About Blog</h2>
          <p className="pb-2 text-lg">This blog used TypeScript and Next.js (framework of React.js) and Tailwind (framework of CSS) for implementation.</p>
          <p className="pb-2 text-lg">It was created by Razieh Kazeminejad in August 2021 and deployed by Vercel.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default about

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