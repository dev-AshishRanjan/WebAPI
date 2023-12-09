import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import Head from "next/head";
import "../styles/firefly.sass";
import "../styles/card.scss";

// umcomment to use cfour font
// import localFont from "next/font/local";
// const myFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/cfour/Cfour.otf",
//       weight: "400",
//     },
//   ],
// });

export default function App({ Component, pageProps }:any) {
  return (
    <>
      <Head>
        <title>WebAPIs</title>
        <meta
          name="description"
          content="A Web API service created in NextJs"
        />
        <meta
          name="keywords"
          content="web,api,webapi,rest,trpc,grpc,graphql,web dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5f5eaa" />
        <link rel="icon" href="/favicon.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="shortcut icon" href="/favicon_sm.png" />
        <link rel="apple-touch-icon" href="/favicon_sm.png"></link>
      </Head>
      {/* <style jsx global>{`
        * {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
