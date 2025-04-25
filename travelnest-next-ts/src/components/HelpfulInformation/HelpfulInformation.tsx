'use client' // only add if using Next.js App Router and interactivity is needed
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './HelpfulInformation.module.css' // Import CSS module styles

const HelpfulInformation: React.FC = () => {
  return (
    <div className={styles.fourthline}> {/* Use styles to apply the CSS classes */}
      <h2>Helpful Information</h2>
      <div className={styles.fourthbox}>
        <div className={styles.aside}>
          <Image src="/picture-source/bayan-ulgii.jpg" alt="Nature3"   width={500}
  height={300} />
          <div className={styles['box-content']}>
            <h2>You Need to Prepare</h2>
            <p>Монголд ирэхдээ зэрэг мэдээлэл</p>
            <Link
              href="/src/pages-html/reading3.html"
              className={styles.read}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read
            </Link>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.bside}>
            <Image src="/picture-source/itinerary.jpeg" alt="Nature1"    width={500}
  height={300}/>
            <div className={styles['box-content']}>
              <h2>Must See in Mongolia</h2>
              <p>Монголд заавал очиж үзэх газруудын талаарх хуудас</p>
              <Link
                href="/src/pages-html/reading1.html"
                className={styles.read}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read
              </Link>
            </div>
          </div>
          <div className={styles.cside}>
            <Image src="/picture-source/itenary.jpg" alt="Nature2"   width={500}
            height={300} />
            <div className={styles['box-content']}>
              <h2>Why Tourists Love Mongolian Nature</h2>
              <p>Яагаад дуртай талаар.</p>
              <Link
                href="/src/pages-html/reading2.html"
                className={styles.read}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpfulInformation;
