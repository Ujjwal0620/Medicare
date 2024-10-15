import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/about.module.css'
const About = () => {
  return (
    <>
    <div className={styles.about_main}>
        <Image src={'/assets_2.jpg'} alt='aboutassets' width={500} height={400} className={styles.home_img}/>
        <div className={styles.about_item}>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste quas, numquam veritatis suscipit esse quia rerum repellendus optio ratione eveniet est, ex dolore, similique perferendis ipsam fuga eligendi possimus.</p>
            <Link href={'#'}>Learn More</Link>
        </div>
    </div>
    <div className={styles.about_main}>
        <div className={styles.about_item}>
            <h1>We have best Docter team</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste quas, numquam veritatis suscipit esse quia rerum repellendus optio ratione eveniet est, ex dolore, similique perferendis ipsam fuga eligendi possimus.</p>
            <Link href={'#'}>Learn More</Link>
        </div>
        <Image src={'/assets_3.jpg'} alt='aboutassets' width={500} height={400} className={styles.home_img}/>
    </div>
    </>
  )
}

export default About