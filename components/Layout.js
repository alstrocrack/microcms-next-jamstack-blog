import Head from 'next/head'
import Header from './Header'
import layout from '../styles/Layout.module.scss'

export default function Layout(props) {
    return (
        <div className={layout.container}>
            <Head>
                <title>YutoUrushima | {props.title}</title>
                <meta property="og:url" content="https://pedantic-hugle-406857.netlify.app" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YutoUrushima" />
                <meta property="og:description" content="Next.js + microCMSで作ったデモブログサイトです。" />
                <meta property="og:site_name" content="YutoUrushima" />
                <meta property="og:image" content="./b-ogp-image.jpg" />
                <meta name="twitter:card" content="Summary with Large Image" />
                <meta name="twitter:site" content="@Frontend_1220" />
            </Head>
            <Header header={props.header} />
            {props.children}
        </div>
    )
}