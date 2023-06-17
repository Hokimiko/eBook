// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Authorization from './components/authorization/Authorization'


function App() {
//   function test(){
//  document.getElementById('animation')
//   }
  return (
    <>
    <div className="container">
      <Header/>
    {/* <div id='animation' className="animation d-none">
      <img className='sms' src="./public/image/person/sms.png" alt="" />
      <img className='person_1' src="./public/image/person/person_1.png" alt="" />
      <p className='sms_text'>Привет! Это электронная книга жалоб населения Кыргызстана.
  Отправляйте жалобы путем заявки - это легко!</p>
    </div> */}
    <Authorization/>
      <Footer/>
    </div>
    </>
  )
}

export default App
