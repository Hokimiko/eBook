// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './footer.module.css'
function Footer() {
  return (
      <footer>
        <a href="">
          <img className={styles.icon} src="./public/image/footer_icon/home.svg" alt="" />
        </a>
        <a href="">
          <img className={styles.icon} src="./public/image/footer_icon/public.svg" alt="" />
        </a>
        <a href="">
          <img className={styles.icon} src="./public/image/footer_icon/gps.svg" alt="" />
        </a>
        <a href="">
          <img className={styles.icon} src="./public/image/footer_icon/profile.svg" alt="" />
        </a>
      </footer>
  )
}

export default Footer