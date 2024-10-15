import React from "react";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { MdOutlineNoteAlt } from "react-icons/md";
import { CiStethoscope } from "react-icons/ci";
import style from '@/app/styles/services.module.css'

const ServiceSilder = () => {
  return (
    <div className={style.servicesilder_main}>
      <div className={style.silderItem}>
        <div className={style.silderIcon}><BsFillHeartPulseFill/></div>
        <h4>Online Appoinment</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi
          eveniet blanditiis ea! Sapiente iusto excepturi officia obcaecati.
        </p>
      </div>
      <div className={style.silderItem}>
      <div className={style.silderIcon}><MdOutlineNoteAlt/></div>
        <h4>Cancer Care</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi
          eveniet blanditiis ea! Sapiente iusto excepturi officia obcaecati.
        </p>
      </div>
      <div className={style.silderItem}>
      <div className={style.silderIcon}><CiStethoscope/></div>

        <h4>Emergency Case</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi
          eveniet blanditiis ea! Sapiente iusto excepturi officia obcaecati.
        </p>
      </div>
    </div>
  );
};

export default ServiceSilder;
