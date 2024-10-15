import Image from "next/image";
import React from "react";
import styles from '@/app/page.module.css'
import Link from "next/link";
import Services from "./Services/page";
import About from "./About/page";
import Docter from "./Docter/page";
import Contact from "./Contact/page";
const page = () => {
  return (
    <>
    <div className={styles.homePage_main}>
    <div className={styles.home_inner_section_1}>
      <h1>LET'S DO <span className={styles.care}>CARE</span>  OF YOUR FAMILY</h1>
      <p>
        Amet minim non deserunt ullamco est aliqua dolor do amet sint. Velit
        officia consequat duis enim velit mollit. Exercitation veniam consequat
        sunt nostrud amet.
      </p>
      <Link href={'/Appoinstments'} >APPOINSTMENTS</Link>
      </div>
      <div className={styles.home_inner_section_2}>
        <Image src={"/assets_1.jpg"} alt="home_doc" width={500} height={400} className={styles.home_img}/>
      </div>
    </div>
    <Services/>
        <About/>
        <Docter/>
        <Contact/>
    </>
  );
};

export default page;
