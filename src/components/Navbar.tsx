import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserTieSolid } from "react-icons/lia";
import { FaRegFolderOpen } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ul className={styles.list}>
          <Link href="/" className={styles.link}>
            <IoHomeOutline className={styles.icon} />
          </Link>
          <Link href="/" className={styles.link}>
            <LiaUserTieSolid className={styles.icon} />
          </Link>
          <Link href="/" className={styles.link}>
            <FaRegFolderOpen className={styles.icon} />
          </Link>
          <Link href="/" className={styles.link}>
            <GrGallery className={styles.icon} />
          </Link>
          <Link href="/" className={styles.link}>
            <BsEnvelope className={styles.icon} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
