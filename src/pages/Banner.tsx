import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import React from "react";
import { FaBarcode } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div id="home" className={styles.body}>
      <div className={styles.leftSide}>
        <div className={styles.title}>Yohan Mayorga</div>
        <div className={styles.arrows}>
          <IoIosArrowForward className={styles.arrow1} />
          <IoIosArrowForward className={styles.arrow2} />
          <IoIosArrowForward className={styles.arrow3} />
          <IoIosArrowForward className={styles.arrow4} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.imgContainer}>
          <div className={styles.codeContainer}>
            <FaBarcode className={styles.code} />
            <p className={styles.codeText}>Yohan M.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
