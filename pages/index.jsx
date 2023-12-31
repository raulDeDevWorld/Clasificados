import Head from 'next/head'
import Image from 'next/image'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import Button from '../components/Button'

import Link from 'next/link'
import FormAdds from '../components/FormAdds'
import Layout from '../layout/Layout'

import BannerLeft from '../components/BannerLeft'
import BannerRight from '../components/BannerRight'
import BannerPortada from '../components/BannerPortada'

import Success from '../components/Success'
import Error from '../components/Error'

import Section from '../components/Section'
import Date from '../components/Date'
import Header from '../components/Header'

import styles from '../styles/Home.module.css'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { listAll } from 'firebase/storage'


const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
const YOUTUBE_API_KEY = "AIzaSyBZkk7x_tGRbf-Yg_A7Y9QYcBQe7T9QtWU"

var fetch_url = `${YOUTUBE_PLAYLIST_ITEMS_API}`


function Home() {
  const { userDB, setUserData, monthAndYear, setUserSuccess, success, postsIMG, showImg, showVideo, date, setUserDate } = useUser()
  const router = useRouter()

  const [listYT, setListYT] = useState(false);

  async function getYB() {
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=8&playlistId=UULFXFA6pzESb1NQMsepmhC6Vw&key=${YOUTUBE_API_KEY}`)
    const data = await res.json();
    setListYT(data)
  }

  function redirectYT () {
    window.open('https://www.youtube.com/@periodicohoybolivia2201/videos', '_blank')
  }

  useEffect(() => {
    getYB()
  }, [])
  console.log(date)

  return (
    <Layout>
      <div className={styles.main}>
        <Header></Header>
        {showImg &&

          <div className={styles.gridImages}>

            {userDB && userDB.Inicio && Object.keys(userDB.Inicio.Posts).map((i, index) => {
     
              return <div className={styles.image} key={index}>
                <Link href='#' legacyBehavior>
                  <a target='_blank'>
                    <img className={styles.image} src={userDB.Inicio.Posts[i].url} alt="img" />
                    <span className={styles.description}>{userDB.Inicio.Posts[i].description}</span>
                  </a>
                </Link >
              </div>
            })}
          </div>}

        {showVideo && listYT !== false &&

          <div className={styles.gridVideos}>


            {listYT.items.map(({ id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId = {} } = snippet;
              const { medium } = thumbnails;
              return (
                <div key={id} className={styles.boxVideo}>

                  <iframe
                    className={styles.video}
                    // width={medium.width}
                    // height={medium.heigth}
                    src={`https://www.youtube.com/embed/${resourceId.videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

                  {/* <p className={styles.videoDescription}>{title}</p> */}

                </div>
              )
            })}
            <div className={styles.boxVideo} onClick={redirectYT}>
              <img className={styles.seeMoreYT} 
              src="/seeMoreYT.jpeg" 
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen  />
              {/* <p className={styles.videoDescription}>Las noticias mas relevantes en <br /> HOY.BO</p> */}
            </div>

          </div>}

        {showImg == false && showVideo == false && <>
          <Section topic="Inicio" publicView={true} color=''></Section>
          <Section topic="Inmuebles" publicView={true} color=''></Section>
          <Section topic="Vehiculos" publicView={true} color=''></Section>
          <Section topic="Empleos" publicView={true} color=''></Section>
          <Section topic="Servicios" publicView={true} color=''></Section>
          <Section topic="Electronica" publicView={true} color=''></Section>
          <Section topic="Academico" publicView={true} color=''></Section>
          <Section topic="Varios" publicView={true} color=''></Section>
        </>}
      </div>
    </Layout>
  )
}

export default WithoutAuth(Home)







// function handlerClickEnlace(data) {
//   router.pathname != "/Admin" && window.open(data.href, data.target)
//   router.pathname == "/Admin" && setDataEditor(i)
//   // console.log(data.href, data.target)

// }



// function whatsappClickHandler() {
//   router.push("https://api.whatsapp.com/send?phone=+59160589090&text=Buenas%20Hoy...")
// }

// function handlerPDFView(parametro) {
//   parametro && setPeriodicoPDFEffect(true)
//   setPeriodicoPDF(!periodicoPDF)
// }


