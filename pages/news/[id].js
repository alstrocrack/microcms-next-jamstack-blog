import single from '../../styles/Single.module.scss'
import Link from 'next/link';

// pages/news/[id].js
export default function BlogId({ blog }) {
  console.log(blog);
  return (
    <main className={single.main}>
      <h1 className={single.title}>{blog.title}</h1>
      <p className={single.date}>
        {blog.updatedAt.slice(0, 10).replace(/-/g, '/')}
        <span className={single.category}>{blog.category.name}</span>
      </p>
      <div className={single.image}>
        <img src={blog.image.url} />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
        className={single.post}
      />
      <Link href="/">
        <div className={single.button}>
          <a className={single.back}>
            to Index
          </a>
        </div>
      </Link>
    </main>
  );
}
  
// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
};
const data = await fetch('https://yutourushima.microcms.io/api/v1/news', key)
    .then(res => res.json())
    .catch(() => null);
const paths = data.contents.map(content => `/news/${content.id}`);
return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
const id = context.params.id;
const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
};
const data = await fetch(
    'https://yutourushima.microcms.io/api/v1/news/' + id,
    key,
)
    .then(res => res.json())
    .catch(() => null);
return {
    props: {
    blog: data,
    },
};
};