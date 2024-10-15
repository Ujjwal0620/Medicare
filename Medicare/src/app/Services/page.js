import React from "react";
import ServicesNav from "../components/ServicesNav";
import style from '@/app/styles/services.module.css'
import ServiceSilder from "../components/ServiceSilder";

const Services = () => {
  return (
    <>
      <ServicesNav />
      <div className={style.services_main}>
        <h1>Top <span className={style.care}>Services</span> for your health</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem
          fuga itaque natus cupiditate magni! Nesciunt iure quae dolores, enim
          ratione quam error eius autem mollitia rem rerum repellat ipsa
        </p>
      </div>
      <ServiceSilder/>
    </>
  );
};

export default Services;
