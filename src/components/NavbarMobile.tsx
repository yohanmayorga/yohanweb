"use client";
import styles from "@/styles/NavbarMobile.module.css";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>YM</div>
        <div className={styles.menu}>
          <IoMenu onClick={() => setShowMenu(true)} />
        </div>
      </div>
      {showMenu && <div className={styles.navbar}>Holaaaaaaaaaa</div>}
    </>
  );
};

export default NavbarMobile;
