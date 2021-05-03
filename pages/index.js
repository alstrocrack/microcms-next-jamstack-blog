import Link from 'next/link';
import main from '../styles/Main.module.scss'
import gsap from 'gsap'
import Layout from '../components/Layout';
import { removeScroll } from '../utils/scroll'

export default function Home({ blog }) {
  
  function openProfile() {
    const profile = document.getElementById('profile');
    gsap.to(profile, {
      left: 0
    });
    removeScroll();
  }

  return (
      <Layout title="Index">
        <main className={main.container}>
          <div className={main.button} onClick={openProfile}>
            <img src="./b-button-icon.svg" alt="open"/>
          </div>
          <h1 className={main.title}>Yuto Urushima</h1>
          <ul className={main.blogList}>
            {/* デバッグ用 */}
            {/* {console.log(blog)} */}
            {/* デバッグ用 */}
            {blog.map(blog => (
              <li key={blog.id} className={main.card}>
                <Link href={`/news/${blog.id}`}>
                  <a className={main.link}>
                    <h3 className={main.blogTitle}>
                      {blog.title}
                      <span className={main.category}>{blog.category.name}</span>
                    </h3>
                    <p className={main.date}>{blog.updatedAt.slice(0, 10).replace(/-/g, '/')}</p>
                    <p className={main.content}>{blog.content}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <p className={main.copyright}>Copyright ©2021 YutoUrushima All Rights Reserved.</p>
        </main>
    </Layout>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://yutourushima.microcms.io/api/v1/news', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};