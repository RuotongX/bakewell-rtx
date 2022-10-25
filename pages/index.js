import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Header from "../components/Header.jsx";

const DynamicPoster = dynamic(() => import("./PosterSlide"));
const DynamicAward = dynamic(() => import("./AwardSlide"));
const DynamicFooter = dynamic(() => import("./ContactFooter"));
const DynamicExpertise = dynamic(() => import("./ExpertiseSlide"));
const DynamicPortfolio = dynamic(() => import("./PortfolioSlide"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>BAKEWELL-WHITE</title>
        <meta name="description" content="BAKEWELL-WHITE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="poster">
        <Header />
      </div>
      <DynamicPoster />

      <div className={styles.continuePage} id="expertise">
      <div className={styles.backgroundPicture}>
          <div className={styles.backgroundMesh}>
            <DynamicExpertise/>
            <div id="portfolio">
              <DynamicPortfolio/>
            </div>
          </div>
        </div>
      </div>
      <div id="award">
        <DynamicAward />
      </div>

      <footer id="contact">
        <DynamicFooter />
      </footer>
    </div>
  );
}
