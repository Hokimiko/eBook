// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <div className="container">
      <Header/>
    <div className="animation">
      <img className='sms' src="./public/image/person/sms.png" alt="" />
      <img className='person_1' src="./public/image/person/person_1.png" alt="" />
      <p className='sms_text'>Привет! Это электронная книга жалоб населения Кыргызстана.
  Отправляйте жалобы путем заявки - это легко!</p>
    </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
