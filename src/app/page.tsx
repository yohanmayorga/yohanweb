import Image from "next/image";
import styles from "./page.module.css";
import About from "@/pages/About";
import Banner from "@/pages/Banner";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import Portfolio from "@/pages/Portfolio";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";

export default function Home() {
  return (
    <>
      <NavbarMobile />
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
          <Navbar />
        </div>
        <div>
          <Banner />
          <About />
          <Portfolio />
          <Gallery />
          <Contact />
        </div>
      </div>
    </>
  );
}
