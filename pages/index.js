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
              <img src="./b-twitter-icon.png" alt="twitter"/>
            </li>
            <li className={header.icon}>
              <img src="./b-facebook-icon.png" alt="facebook"/>
            </li>
            <li className={header.icon}>
              <img src="./b-github-icon.png" alt="github"/>
            </li>
          </ul>
        </div>
      </header>
      <main className={main.container}>
        <h1 className={main.title}>Yuto Urushima</h1>
        <ul className={main.blogList}>
          {console.log(blog)}
          {blog.map(blog => (
            <li key={blog.id}>
              <img src={blog.image.url}/>
              <Link href={`/news/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
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