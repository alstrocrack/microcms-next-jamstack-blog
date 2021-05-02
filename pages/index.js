// pages/index.js
import Link from 'next/link';
import header from '../styles/Header.module.scss'
import layout from '../styles/Layout.module.scss'
import main from '../styles/Main.module.scss'

export default function Home({ blog }) {
  return (
    <div className={layout.container}>
      <header className={header.container}>
        <div className={header.wrap}>
          <div className={header.image}>
            <img src="./b-header-image.jpg" alt="yuto urushima"/>
          </div>
          <p className={header.name}>漆島裕人</p>
          <p className={header.text}>
          福岡県北九州市出身、96年生まれの24歳、射手座。福岡県立東筑高等高校、1浪を経て九州大学工学部建築学科卒業。<br/>
          小学校高学年から高校卒業まで部活動でサッカーをしていました。
          </p>
          <ul className={header.sns}>
            <li className={header.icon}>
              <Link href="https://twitter.com/Frontend_1220">
                <a target="_blank">
                  <img src="./b-twitter-icon.png" alt="twitter"/>
                </a>
              </Link>
            </li>
            <li className={header.icon}>
              <Link href="https://www.facebook.com/profile.php?id=100036153361841">
                <a target="_blank">
                  <img src="./b-facebook-icon.png" alt="facebook"/>
                </a>
              </Link>
            </li>
            <li className={header.icon}>
              <Link href="https://github.com/YutoUrushima">
                <a target="_blank">
                  <img src="./b-github-icon.png" alt="github"/>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main className={main.container}>
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
    </div>
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