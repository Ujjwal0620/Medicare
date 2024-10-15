import React from 'react'
import style from '@/app/styles/footer.module.css'
const Footer = () => {
  return (
    <div className={style.footer_main}>
        <ul>
            <li><h3>Company info</h3></li>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
        </ul>
        <ul>
            <li><h3>Features</h3></li>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
        </ul>
        <ul>
            <li><h3>Resources</h3></li>
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
        </ul>
        <ul>
            <li><h3>Get in Touch</h3></li>
            <li>808089 7077</li>
            <li>patna,bihar,800001</li>
            <li>company@gmail.com</li>
        </ul>
    </div>
  )
}

export default Footer