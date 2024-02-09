"use client";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserTieSolid } from "react-icons/lia";
import { FaRegFolderOpen } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ul className={styles.list}>
          <Link href="#home" onClick={handleScroll} className={styles.link}>
            <IoHomeOutline className={styles.icon} />
          </Link>
          <Link href="#about" onClick={handleScroll} className={styles.link}>
            <LiaUserTieSolid className={styles.icon} />
          </Link>
          <Link
            href="#portfolio"
            onClick={handleScroll}
            className={styles.link}
          >
            <FaRegFolderOpen className={styles.icon} />
          </Link>
          <Link href="#gallery" onClick={handleScroll} className={styles.link}>
            <GrGallery className={styles.icon} />
          </Link>
          <Link href="#contact" onClick={handleScroll} className={styles.link}>
            <BsEnvelope className={styles.icon} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
