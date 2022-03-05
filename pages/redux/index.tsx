import Head from "next/head";
import { Counter } from "../../components/counter";
import Layout from "../../components/layout";

const Redux = (): JSX.Element => (
  <Layout>
    <Head>Redux Example</Head>
    <section className="max-w-sm items-center container">
      <Counter />
    </section>
  </Layout>
);

export default Redux;