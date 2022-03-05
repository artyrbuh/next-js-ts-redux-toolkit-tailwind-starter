import Head from "next/head";
import { Kanye } from "../../components/kanye";
import Layout from "../../components/layout";

const Redux = (): JSX.Element => (
  <Layout>
    <Head>Redux Example</Head>
    <section className="max-w-sm items-center container">
      <Kanye />
    </section>
  </Layout>
);

export default Redux;