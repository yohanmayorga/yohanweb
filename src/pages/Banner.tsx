import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import React from "react";
import { FaBarcode } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiSqlalchemy } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";

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
          <div className={styles.technologies}>
            <AiOutlineHtml5 />
            <FaCss3Alt />
            <RiBootstrapLine />
            <BiLogoTailwindCss />
            <IoLogoJavascript />
            <FaReact />
            <TbBrandNextjs />
            <TbBrandPython />
            <DiDjango />
            <SiFlask />
            <FaNodeJs />
            <DiPostgresql />
            <SiSqlalchemy />
            <TbBrandMongodb />
            <FaGit />
            <FaWordpressSimple />
          </div>
        </div>

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
