import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import React from "react";
import { FaBarcode } from "react-icons/fa";
import { IoIosNuclear } from "react-icons/io";
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
            <div className={styles.logosContainer}>
              <AiOutlineHtml5 className={styles.logosTec} />
              <FaCss3Alt className={styles.logosTec} />
              <RiBootstrapLine className={styles.logosTec} />
              <BiLogoTailwindCss className={styles.logosTec} />
              <IoLogoJavascript className={styles.logosTec} />
              <FaReact className={styles.logosTec} />
              <TbBrandNextjs className={styles.logosTec} />
              <TbBrandPython className={styles.logosTec} />
              <DiDjango className={styles.logosTec} />
              <SiFlask className={styles.logosTec} />
              <FaNodeJs className={styles.logosTec} />
              <DiPostgresql className={styles.logosTec} />
              <SiSqlalchemy className={styles.logosTec} />
              <TbBrandMongodb className={styles.logosTec} />
              <FaGit className={styles.logosTec} />
              <FaWordpressSimple className={styles.logosTec} />
            </div>
          </div>
        </div>

        <div className={styles.arrows}>
          <div className={styles.textBox}>
            <div className={styles.textHeader}>
              <IoIosNuclear className={styles.textLogo} />
              <h1>Title</h1>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              accusamus eveniet officia quidem debitis deserunt totam qui nisi
              atque, cupiditate sed, facere similique! Assumenda, eaque modi
              consequuntur adipisci vero aut.
            </p>
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
