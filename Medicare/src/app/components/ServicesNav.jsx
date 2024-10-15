import React from 'react'
import style from '@/app/styles/services.module.css'
const ServicesNav = () => {
  return (
    <div className={style.servicesNav_main}>
        <div >
            <h1>15K</h1>
            <p>Happy Customers</p>
        </div>
        <div>
            <h1>150K</h1>
            <p>Monthly Visitors</p>
        </div>
        <div>
            <h1>15</h1>
            <p>Countries Worldwide</p>
        </div>
        <div>
            <h1>100+</h1>
            <p>Top Partners</p>
        </div>
    </div>
  )
}

export default ServicesNav