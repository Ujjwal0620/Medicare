import Link from "next/link";
import React from "react";
import styles from '@/app/styles/nav.module.css'
const Nav = () => {
  return (
    <div className={styles.nav_main}>
    <h2 className="logo">Medicare</h2>
    <div className={styles.nav_taxtes_main}>
      <ul className={styles.navTaxt}>
        <li><Link href={'#'}>Home</Link> </li>
        <li><Link href={'/About'}>About</Link> </li>
        <li><Link href={'/Docter'}>Docter</Link></li>
        <li><Link href={'/Services'}>Services</Link></li>
        <li><Link href={'/Contact'}>Contact</Link></li>
        
      </ul>
      <ul className={styles.navRoute}>
        <li className="loginBtn">
            <Link href={'/login'}>LogIn</Link>
        </li>
        <li className="signupBtn">
            <Link href={'/signup'}>SignUp</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Nav;
