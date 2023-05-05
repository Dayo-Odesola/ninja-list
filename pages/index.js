import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className= {styles.title} >Homepage</h1>
        <p className= {styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis totam placeat repudiandae! Autem temporibus quos, sunt cum facere ad expedita nisi officiis tenetur numquam debitis nostrum mollitia voluptates, odio qui.</p>
        <p className= {styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis totam placeat repudiandae! Autem temporibus quos, sunt cum facere ad expedita nisi officiis tenetur numquam debitis nostrum mollitia voluptates, odio qui.</p>
        <Link className= {styles.btn} href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  )
}
