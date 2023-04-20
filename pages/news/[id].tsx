import Head from "next/head";
import single from "../../styles/Single.module.scss";
import Link from "next/link";
import { Blog, FetchedContents } from "../../models/Blog";
import React from "react";
import axios from "axios";

interface Context {
  params: {
    id: number;
  };
}

// pages/news/[id].js
const BlogId: React.FC<Blog> = ({ title, updatedAt, category, image, content }) => {
  return (
    <div>
      <Head>
        <title>YutoUrushima | {title}</title>
        <meta property="og:url" content="https://pedantic-hugle-406857.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YutoUrushima" />
        <meta property="og:description" content="Next.js + microCMSで作ったデモブログサイトです。" />
        <meta property="og:site_name" content="YutoUrushima" />
        <meta property="og:image" content="./b-ogp-image.jpg" />
        <meta name="twitter:card" content="Summary with Large Image" />
        <meta name="twitter:site" content="@Frontend_1220" />
      </Head>
      <main className={single.main}>
        <h1 className={single.title}>{title}</h1>
        <p className={single.date}>
          {updatedAt.slice(0, 10).replace(/-/g, "/")}
          <span className={single.category}>{category.name}</span>
        </p>
        <div className={single.image}>
          <img src={image.url} alt={title} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${content}`,
          }}
          className={single.post}
        />
        <Link href="/">
          <div className={single.button}>to Index</div>
        </Link>
      </main>
    </div>
  );
};

export default BlogId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  await axios
    .get<FetchedContents>("https://yutourushima.microcms.io/api/v1/news", {
      headers: { "X-API-KEY": process.env.API_KEY },
    })
    .then((response) => {
      const paths = response.data.contents.map((content) => `/news/${content.id}`);
      return { paths, fallback: false };
    })
    .catch((error) => {
      throw new Error(error);
    });
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: Context) => {
  await axios
    .get<FetchedContents>(`https://yutourushima.microcms.io/api/v1/news/${encodeURI(context.params.id.toString())}`, {
      headers: { "X-API-KEY": process.env.API_KEY },
    })
    .then((response) => {
      return {
        props: {
          blog: response.data,
        },
      };
    })
    .catch((error) => {
      throw new Error(error);
    });
};
