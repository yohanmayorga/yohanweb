import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import React from "react";
import { FaBarcode } from "react-icons/fa";
import { IoIosNuclear } from "react-icons/io";

import { FaExpandArrowsAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";

const Banner = () => {
  return (
    <div id="home" className={styles.body}>
      <div className={styles.leftSide}>
        <div className={styles.topArrow}>
          <FaExpandArrowsAlt />
          <FaBarcode />
        </div>

        <div className={styles.middle}>
          <div className={styles.wrapper}>
            <p className={styles.intro}>{`<>世界、こんにちは</>`}</p>
          </div>
          <div className={styles.title}>Yohan Mayorga</div>
          <div className={styles.animatedText}>
            {`I'm a developer, designer and freelancer.`}
          </div>

          <div className={styles.social}>
            <Link href="https://github.com/yohanmayorga" target="_blank">
              <FiGithub className={styles.bounce} />
            </Link>

            <Link href="https://linkedin.com/in/yohanmayorga" target="_blank">
              <FaLinkedinIn className={styles.bounce} />
            </Link>

            <Link
              href="https://www.instagram.com/yohanmayorga/"
              target="_blank"
            >
              <FaInstagram className={styles.bounce} />
            </Link>

            <Link href="https://twitter.com/yohanmayorga" target="_blank">
              <FaXTwitter className={styles.bounce} />
            </Link>

            <Link href="https://www.youtube.com/@yohanmayorga" target="_blank">
              <FiYoutube className={styles.bounce} />
            </Link>

            <Link href="https://www.tiktok.com/@yohan.mayorga" target="_blank">
              <FaTiktok className={styles.bounce} />
            </Link>
          </div>
        </div>

        <div className={styles.arrows}>
          <div className={styles.textBox}>
            <div className={styles.textHeader}>
              <IoIosNuclear className={styles.textLogo} />
              <h3>Welcome</h3>
            </div>
            <p>Carpe diem. Memento Mori.</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.imgContainer}>
          <div className={styles.codeContainer}>
            <p className={styles.imgText}>CREATE</p>
            <FaBarcode className={styles.code} />
            <p className={styles.codeText}>Yohan M.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
