import React from 'react'
import Layout from "../components/Layout"
import nookies from "nookies";
import { firebaseAdmin } from "../lib/firebaseAdmin";
import { GetServerSidePropsContext } from "next";

interface aboutProps {}

const about = () => {

  return (
    <div>
      <Layout pageTitle='About' />
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg w-5/6 px-16 py-16">
            <h2 className="text-2xl text-center text-green-700 mb-10 font-serif">About Us</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ex nulla, quis aliquet massa sodales vel. Duis sit amet tristique turpis. Mauris id dapibus sem, eu rhoncus nunc. Fusce ultricies, metus eget porttitor bibendum, diam elit auctor erat, vel finibus massa justo eu purus. Maecenas tincidunt vestibulum dolor. Phasellus efficitur sem eget velit gravida rhoncus. Aliquam pulvinar nec neque id ultrices. Vivamus et rhoncus elit. Vivamus pellentesque, ligula a fringilla accumsan, magna tellus tincidunt metus, non suscipit purus lorem ac est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum varius augue vitae dignissim. Suspendisse nibh dolor, vestibulum ac metus vel, venenatis ultricies sapien.

            Maecenas eleifend, dolor nec dictum dignissim, mauris erat fermentum augue, eget pellentesque neque nisi eu augue. Etiam magna eros, porta non justo sed, mattis dapibus purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In dictum sodales efficitur. Pellentesque in maximus mi. Vestibulum odio metus, mollis eu ligula eget, eleifend sodales turpis. Duis nec erat erat.

            Ut accumsan sem in urna tincidunt rhoncus. Phasellus gravida lacinia libero, sit amet ultrices dui molestie sit amet. Sed rutrum fringilla nulla, ut ornare ligula interdum vel. Donec sollicitudin placerat lacus, sodales commodo justo malesuada non. Etiam ultrices molestie ipsum, at consequat dui finibus at. Maecenas in leo diam. Quisque condimentum est eu mi vestibulum, ac finibus metus tristique. Mauris lacinia viverra lectus viverra eleifend.

            In sem tellus, ullamcorper placerat neque vel, ultricies bibendum eros. In hac habitasse platea dictumst. Cras est tellus, tristique quis laoreet nec, eleifend consequat ante. Phasellus ultrices urna nisi, eu ornare purus volutpat ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at congue risus. Etiam libero augue, egestas sed erat iaculis, fermentum pellentesque dolor. Aliquam erat volutpat. Nullam nec semper risus, id bibendum mauris. Duis vulputate, lorem a maximus ultricies, tellus arcu fermentum felis, at sollicitudin nulla diam a nulla.

            Mauris id lacus ac nunc luctus vehicula ac sed sem. Nam venenatis eros a erat pellentesque, sit amet gravida nibh mollis. Donec suscipit, nulla sit amet tempor iaculis, mauris magna facilisis arcu, at volutpat mi lectus vitae libero. Cras elementum massa non justo aliquet, vel interdum augue dapibus. Integer quis enim venenatis, malesuada mauris a, mollis tortor. Duis scelerisque nulla a dignissim laoreet. Integer ut luctus erat. Integer aliquet lacus ut turpis commodo, in blandit nisi tristique.
            </p>
          </div>
        </div>
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