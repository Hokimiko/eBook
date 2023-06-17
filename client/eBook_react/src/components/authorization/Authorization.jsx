// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './authorization.module.css'

function Authorization() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Авторизация</h2>
      </div>
      <form action="" className={styles.form}>
        <input type="text" id={styles.name} className={styles.input} placeholder='Имя'/>
        <input type="text" id={styles.surname} className={styles.input} placeholder='Фамилия'/>
        <input type="number" id={styles.number} className={styles.input} placeholder='Номер телефона'/>
        <input type="email" id={styles.email} className={styles.input} placeholder='Email (необязательно)'/>
      </form>
      <button className={styles.btn}>Зарегистрироваться</button>
    </div>
  )
}

export default Authorization;