import React from 'react'
import style from '@/app/styles/contact.module.css'
const Contact = () => {
  return (
    <div className={style.contact_main}>
        <div className={style.contact_inner_div}>
        <h1>Contact Us</h1>
        <form>
            <input type="text" placeholder='Name...' className={style.input}/>
            <input type="email" placeholder='Email...' className={style.input}/>
            <input type="number" placeholder='Phone...' className={style.input}/>
            <textarea name="message"  cols="30" rows="10" className={style.input}></textarea>
            <button>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact