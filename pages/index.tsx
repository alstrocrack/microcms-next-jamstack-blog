import Link from "next/link";
import main from "../styles/Main.module.scss";
import gsap from "gsap";
import Layout from "../components/Layout";
import { removeScroll } from "../utils/scroll";
import React from "react";
import axios from "axios";
import { Blog, FetchedContents } from "../types/Blog";

interface BlogsProps {
  blogs: Blog[];
}

const Home: React.FC<BlogsProps> = (blogs) => {
  const openProfile = () => {
    const profile = document.getElementById("profile");
    gsap.to(profile, {
      left: 0,
    });
    removeScroll();
  };

  return (
    <Layout title="Index">
      <main className={main.container}>
        <div className={main.button} onClick={openProfile}>
          <img src="./b-button-icon.svg" alt="open" />
        </div>
        <h1 className={main.title}>Yuto Urushima</h1>
        <ul className={main.blogList}>
          {blogs.blogs.map((blog) => (
            <li key={blog.id} className={main.card}>
              <Link href={`/news/${blog.id}`}>
                <h3 className={main.blogTitle}>
                  {blog.title}
                  <span className={main.category}>{blog.category.name}</span>
                </h3>
                <p className={main.date}>{blog.updatedAt.slice(0, 10).replace(/-/g, "/")}</p>
                <p className={main.content}>{blog.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Home;

// Describe the process of passing data to the template
export const getStaticProps = async () => {
  let data = {};
  await axios
    .get<FetchedContents>(process.env.API_URL!, {
      headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
    })
    .then((response) => {
      data = {
        props: {
          blogs: response.data.contents,
        },
      };
    })
    .catch((error) => {
      throw new Error(error);
    });
  return data;
};
