import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Header from "../components/Header.js";

const DynamicPoster = dynamic(() => import("./posterSlide"));
const DynamicAward = dynamic(() => import("./awardSlide"));
const DynamicFooter = dynamic(() => import("./contactFooter"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DynamicPoster />
      <div className={styles.continuePage}>
      <div className={styles.backgroundPicture}>
        <div className={styles.backgroundMesh}/>
      </div>
      
      </div>
      <DynamicAward />

      <footer>
        <DynamicFooter/>
      </footer>
    </div>
  );
}
