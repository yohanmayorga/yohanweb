"use client";
import styles from "@/styles/NavbarMobile.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserTieSolid } from "react-icons/lia";
import { FaRegFolderOpen } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>YM</div>
        <div className={styles.menu}>
          <IoMenu onClick={() => setShowMenu(true)} />
        </div>
      </div>
      {showMenu && (
        <div className={styles.navbar}>
          <div className={styles.close}>
            <IoIosCloseCircleOutline onClick={() => setShowMenu(false)} />
          </div>
          <div className={styles.links}>
            <Link href="#home" onClick={handleScroll} className={styles.link}>
              <IoHomeOutline className={styles.icon} />
              <p className={styles.label}>Home</p>
            </Link>
            <Link href="#about" onClick={handleScroll} className={styles.link}>
              <LiaUserTieSolid className={styles.icon} />
              <p className={styles.label}>About</p>
            </Link>
            <Link
              href="/portfolio"
              onClick={handleScroll}
              className={styles.link}
            >
              <FaRegFolderOpen className={styles.icon} />
              <p className={styles.label}>Portfolio</p>
            </Link>
            <Link
              href="/gallery"
              onClick={handleScroll}
              className={styles.link}
            >
              <GrGallery className={styles.icon} />
              <p className={styles.label}>Gallery</p>
            </Link>
            <Link
              href="/contact"
              onClick={handleScroll}
              className={styles.link}
            >
              <BsEnvelope className={styles.icon} />
              <p className={styles.label}>Contact</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
