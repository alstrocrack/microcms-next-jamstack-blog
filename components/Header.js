import Link from 'next/link'
import gsap from 'gsap'
import { addScroll } from '../utils/scroll'
import header from '../styles/Header.module.scss'

export default function Header(props) {
      
    function closeProfile() {
        const profile = document.getElementById('profile');
        gsap.to(profile, {
          left: '-100%'
        });
        addScroll();
    }

    return (
        <header className={header.container} id="profile">
            <div className={header.button} onClick={closeProfile}>
            <img src="./b-close-icon.svg" alt="close"/>
            </div>
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
                    <img src="./b-twitter-icon.png" alt="twitter"/>
                </Link>
                </li>
                <li className={header.icon}>
                <Link href="https://www.facebook.com/profile.php?id=100036153361841">
                    <img src="./b-facebook-icon.png" alt="facebook"/>
                </Link>
                </li>
                <li className={header.icon}>
                <Link href="https://github.com/YutoUrushima">
                    <img src="./b-github-icon.png" alt="github"/>
                </Link>
                </li>
            </ul>
            </div>
        </header>
    )
}