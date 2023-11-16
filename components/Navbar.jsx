import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'

import style from '../styles/Navbar.module.css'

export default function Navbar() {
    const { pathname } = useRouter()
    
    const { setUserShowImg, showImg, setUserShowVideo, showVideo  } = useUser()
    function handleClick() {
        setUserShowImg(!showImg)
        setUserShowVideo(false)

    }
    function handleClickYT() {
        setUserShowVideo(!showVideo)
        setUserShowImg(false)
    }
    function handlerClick() {
        setUserShowImg(false)
        setUserShowVideo(false)
    }
    return (
        <>
            <span className={style.socialMediaSpan}>Siguenos en:</span>

            <div className={style.socialMedia}>

                <div className={style.socialMediaIcons}>

                    <Link href="https://api.whatsapp.com/send?phone=+59161116665&text=Hola%20Periódico%20HOY%20%20quiero%20contactarme%20con%20un%20agente%20de%20ventas..." legacyBehavior scroll={false}>
                        <a onClick={handlerClick} target="_blank"><img src="/SocialMedia/whatsapp.svg" alt="SocialMedia" /></a>
                    </Link>
                    <Link href="https://www.facebook.com/periodicohoybolivia0" legacyBehavior scroll={false}>
                        <a onClick={handlerClick} target="_blank"><img src="/SocialMedia/facebook.png" alt="SocialMedia" /></a>
                    </Link>
                    <Link href="https://www.instagram.com/periodicohoybolivia/" legacyBehavior scroll={false}>
                        <a onClick={handlerClick} target="_blank"><img src="/SocialMedia/instagram.png" alt="SocialMedia" /></a>
                    </Link>
                    <Link href="https://twitter.com/_HOYBolivia" legacyBehavior scroll={false}>
                        <a onClick={handlerClick} target="_blank"> <img src="/SocialMedia/twiter.png" alt="SocialMedia" /></a>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCXFA6pzESb1NQMsepmhC6Vw" legacyBehavior scroll={false}>
                        <a onClick={handlerClick} target="_blank"> <img src="/SocialMedia/youtube.png" alt="SocialMedia" /></a>
                    </Link>
                    <Link href="https://www.tiktok.com/@periodicohoybolivia" legacyBehavior scroll={false}>
                        <a onClick={handlerClick} target="_blank"> <img src="/SocialMedia/tiktok.png" alt="SocialMedia" /></a>
                    </Link>
                    <Link href="https://firebasestorage.googleapis.com/v0/b/hoy-bo-8b964.appspot.com/o/Peri%C3%B3dico%20HOY.apk?alt=media&token=1f242f98-80da-4bc5-bc61-63f6b556f87f" legacyBehavior scroll={false}>
                        <a onClick={handlerClick} > <img src="/SocialMedia/android.svg" alt="SocialMedia" /></a>
                    </Link>
                </div>

            </div>

            <div className={style.container}>
                <nav className={style.nav}>
                    <Link href="#Inmuebles" legacyBehavior scroll={false}>
                        <a className={`${style.link} ${pathname == "#Inmuebles" ? style.active : ''}`} onClick={handlerClick}>INMUEBLES</a>
                    </Link>
                    <Link href="#Vehiculos" legacyBehavior scroll={false}>
                        <a className={`${style.link} ${pathname == "#Vehiculos" ? style.active : ''}`} onClick={handlerClick}>VEHICULOS</a>
                    </Link>
                    <Link href="#Empleos" legacyBehavior scroll={false}>
                        <a className={`${style.link} ${pathname == "#Empleos" ? style.active : ''}`} onClick={handlerClick}>EMPLEOS</a>
                    </Link>
                    <Link href="#Servicios" legacyBehavior scroll={false}>
                        <a className={`${style.link} ${pathname == "#Servicios" ? style.active : ''}`} onClick={handlerClick}>SERVICIOS</a>
                    </Link>
                    <Link href="#Electronica" legacyBehavior scroll={false}>
                        <a className={`${style.link} ${pathname == "#Electronica" ? style.active : ''}`} onClick={handlerClick}>ELECTRONICA</a>
                    </Link>
                    <Link href="#Academico" legacyBehavior scroll={false}>
                        <a className={`${style.link} ${pathname == "#Academico" ? style.active : ''}`} onClick={handlerClick}>ACADEMICO</a>
                    </Link>
                    <Link href="#Varios" legacyBehavior scroll={false}>
                        <a className={`${style.link} ${pathname == "#Varios" ? style.active : ''}`} onClick={handlerClick}>VARIOS</a>
                    </Link>
                    <Link href="#Nosotros" legacyBehavior scroll={false}>
                        <a className={`${style.link} ${pathname == "#Nosotros" ? style.active : ''}`} >NOSOTROS</a>
                    </Link>
                    

                </nav>
            </div>
        </>
    )
}
