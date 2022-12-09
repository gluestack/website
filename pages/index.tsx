import Head from "next/head";
import Image from "next/image";
import { FirstFold } from "../components/FirstFold";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GlueStack</title>
        <meta
          name="description"
          content="Power up your app development with our full stack framework "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <FirstFold />
      </main>
      <Footer />
    </div>
  );
}
