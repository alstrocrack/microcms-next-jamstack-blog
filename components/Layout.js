import Head from 'next/head'
import Header from './Header'
import layout from '../styles/Layout.module.scss'

export default function Layout(props) {
    return (
        <div className={layout.container}>
            <Head>
                <title>YutoUrushima | {props.title}</title>
                {/* 共通、facebook */}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="YutoUrushima"/>
                <meta property="og:description" content="Next.js + microCMSで作ったデモブログサイトです。"/>
                <meta property="og:url" content="https://pedantic-hugle-406857.netlify.app"/>
                <meta property="og:site_name" content="YutoUrushima"/>
                {/* meta twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="YutoUrushima"/>
                <meta name="twitter:title" content="YutoUrushima"/>
                <meta name="twitter:description" content="Next.js + microCMSで作ったデモブログサイトです。"/>
                <meta name="twitter:image" content="https://pedantic-hugle-406857.netlify.app/b-ogp-image.jpg"/>
                <meta name="twitter:url" content="https://pedantic-hugle-406857.netlify.app"/>
                {/* /meta twitter */}
            </Head>
            <Header header={props.header} />
            {props.children}
        </div>
    )
}