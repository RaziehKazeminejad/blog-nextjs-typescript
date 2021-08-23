import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import nookies from "nookies";
import { firebaseAdmin } from "../lib/firebaseAdmin";
import { GetServerSidePropsContext } from "next";
import Layout from '../components/Layout';

export default function index({message} :any) {
  if(!message){
    return (
    <>
      <Header/>
      <LandingPage />
      <Footer />
    </>
  )
  }else{
    return (
      <>
        <Layout pageTitle='Blog'/>
        <LandingPage />
        <Footer />
      </>
    );
  }
}

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
      props: {} as never,
    };
  }
};