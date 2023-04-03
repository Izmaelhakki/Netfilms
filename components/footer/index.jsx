import React from "react";
import Link from "next/link";

import styles from "./styles.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      For Training NextJs v13&nbsp;
      <Link href="https://github.com/Izmaelhakki" target="_blank">
        İzmaelHakki
      </Link>
    </footer>
  );
}

export default Footer;
