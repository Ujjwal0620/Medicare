import Image from "next/image";
import React from "react";
import style from "@/app/styles/docter.module.css";
import { CiStethoscope } from "react-icons/ci";
const Docter = () => {
  return (
    <div className={style.docter_header}>
      <div className={style.docter_main}>
        <div className={style.docter_text}>
          <h1>Meet our great Docter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est
            maiores placeat sunt, reprehenderit dolore, quisquam odit.
          </p>
        </div>
        <div className={style.docter_image}>
          <div className={style.docter_inner_item}>
            <h3>Dr. Bessie Cooper</h3>
            <p>Psychologist</p>
            <Image src={"/Bessie.png"} width={150} height={200} />
          </div>
          <div className={style.docter_inner_item}>
            <h3>Dr. Ralph Edwards</h3>
            <p>Orthopedist</p>
            <Image src={"/Ralph.png"} width={150} height={200} />
          </div>
          <div className={style.docter_inner_item}>
            <h3>Dr. Theresa Webb</h3>
            <p>Chardiologist</p>
            <Image src={"/Theresa.png"} width={150} height={200} />
          </div>
        </div>
      </div>


      <div className={style.docter_main}>
        <div className={style.docter_text}>
          <h1>What patient say about us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est
            maiores placeat sunt, reprehenderit dolore, quisquam odit.
          </p>
        </div>
        <div className={style.docter_image}>
          <div className={style.docter_inner_item}>
            <div className={style.silderIcon}>
              <CiStethoscope />
            </div>
            <p className={style.docter_inner_item_para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est
              maiores placeat sunt, reprehenderit dolore, quisquam odit.
            </p>
            <Image src={"/assets_4.jpg"} width={50} height={50} className={style.user_id_img} />
            <p>"Dariene Robertson"</p>
          </div>
          <div className={style.docter_inner_item}>
            <div className={style.silderIcon}>
              <CiStethoscope />
            </div>
            <p className={style.docter_inner_item_para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est
              maiores placeat sunt, reprehenderit dolore, quisquam odit.
            </p>
            <Image src={"/assets_4.jpg"} width={50} height={50} className={style.user_id_img} />
            <p>"Brooklyn Simmons"</p>
          </div>
          <div className={style.docter_inner_item}>
            <div className={style.silderIcon}>
              <CiStethoscope />
            </div>
            <p className={style.docter_inner_item_para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam est
              maiores placeat sunt, reprehenderit dolore, quisquam odit.
            </p>
            <Image src={"/assets_4.jpg"} width={50} height={50} className={style.user_id_img}/>
            <p>"Devon Lane"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docter;
