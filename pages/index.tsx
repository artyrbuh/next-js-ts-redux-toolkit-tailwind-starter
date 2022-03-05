import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="container max-w-sm">
        <p className="mb-2">A little something to help get the ball rolling</p>

        <p className="mb-1">
          Packed with the following: 
        </p>

        <ul>
          <li>- adds and configures <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a></li>
          <li>- adds <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>, with some custom configs</li>
          <li>- adds <a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">Redux Toolkit</a></li>
          <li>- configures 2 Redux slice examples: Counter slice, and Async Kanye Quote Slice</li>
          <li>- configures custom Redux middleware example</li>
          <li>- adds <a href="https://github.com/rt2zz/redux-persist" target="_blank" rel="noreferrer">Redux Persist</a>, and persists the Counter slice</li>
          <li>- adds <a href="https://formik.org/" target="_blank" rel="noreferrer">Formik</a></li>
        </ul>
      </section>
    </Layout>
  );
};
