import styles from "@/styles/About.module.css";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { IoBatteryCharging } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaBarcode } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { PiDotsNineBold } from "react-icons/pi";
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
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className={styles.body}>
      <div className={styles.mainContainer}>
        <div className={styles.title}>About</div>
        <div className={styles.boxBorder}>
          <div className={styles.firstBox}>
            <div className={styles.firstBoxHeader}>
              <div className={styles.headerLogos}>
                <MdDoubleArrow />
                <IoBatteryCharging className={styles.battery} />
              </div>
              <div className={styles.socialBox}>
                <div className={styles.social}>
                  <Link href="https://github.com/yohanmayorga" target="_blank">
                    <FiGithub className={styles.bounce} />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/yohanmayorga"
                    target="_blank"
                  >
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
                  <Link
                    href="https://www.youtube.com/@yohanmayorga"
                    target="_blank"
                  >
                    <FiYoutube className={styles.bounce} />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@yohan.mayorga"
                    target="_blank"
                  >
                    <FaTiktok className={styles.bounce} />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.nameTitles}>
              <div className={styles.mainTitle}>Yohan</div>
              <p className={styles.subname}>Developer</p>
            </div>
            <div className={styles.texts}>
              <div className={styles.des}>
                With over 7 years of experience in the financial and investment
                sector, I am a proficient full-stack web developer with
                expertise in various programming languages and tools. I have
                built web applications for different industries through personal
                and academic projects.
              </div>
              <div className={styles.des}>
                I possess strong communication and negotiation skills, honed
                through interactions with clients and suppliers. I am a
                collaborative and team-oriented individual with a proven track
                record of meeting deadlines and achieving goals.
              </div>
              <div className={styles.des}>
                I have experience in video editing and content creation,
                incorporating cutting-edge technologies like AI. I am passionate
                about continuous learning and adapting to the evolving market
                demands.
              </div>
              <div className={styles.des}>
                In my free time, I enjoy photography, reading, and playing the
                piano. I am deeply interested in art, culture, and exploring new
                places.
              </div>
            </div>
            <div className={styles.firstBoxBottom}>
              <TbWorld />
              <p>Worldwide</p>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.logosContainer}>
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
        </div>
        <div className={styles.secondBox}>
          <div className={styles.title}>Developer, designer & freelancer.</div>
          <div className={styles.secondBoxBottom}>
            <ImCross />
            <FaBarcode />
            <PiDotsNineBold />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
