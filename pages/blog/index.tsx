import Link from "next/link";
import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getSortedPostsData, PostData } from "../../lib/posts";
import { GetStaticProps } from "next";

const Blog = ({ allPostsData }: { allPostsData: PostData[]}): JSX.Element => (
  <Layout>
    <Head>
      <title>Blog List</title>
    </Head>
    <section>
      <h2 className="text-4xl font-black">Blog</h2>
      <ul className="mb-10">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="mt-4 p-4 bg-purple-50 rounded-sm shadow-md w-72">
            <Link href={`/posts/${id}`}>
              <a className="font-bold">{title}</a>
            </Link>
            <br />
            <small className="text-gray-400">
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
