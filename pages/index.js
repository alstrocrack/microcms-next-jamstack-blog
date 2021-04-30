// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

export default function Home({ blog }) {
  return (
    <div>
      <header className={styles.l_header}>
        <div className={styles.l_header_image}>
          <img src="./b-header-image.jpg" alt="yuto urushima"/>
        </div>
        <p className="l-header_text">名古屋のフロントエンドエンジニア</p>
        <ul className="l-header_sns">
          <li className="l-header_sns-item">
            <img src="./b-twitter-icon.png" alt="twitter"/>
          </li>
          <li className="l-header_sns-item">
            <img src="./b-twitter-icon.png" alt="twitter"/>
          </li>
          <li className="l-header_sns-item">
            <img src="./b-twitter-icon.png" alt="twitter"/>
          </li>
        </ul>
      </header>
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            <Link href={`news/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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