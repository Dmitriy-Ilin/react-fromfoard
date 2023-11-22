import React, { useState } from 'react'
import Header from '../components/Header'
import Calculator from '../components/Calculator'
import Advantages from '../components/Advantages'
import Guarantee from '../components/Guarantee'
import Reviews from '../components/Reviews'
import Question from '../components/Question'
import Footer from '../components/Footer'

const MainPage = () => {
  const [classBlur, setClassBlur] = useState('');

  const handleBurgerClick = () => {
    classBlur === 'blur' ? setClassBlur('') : setClassBlur('blur')
  }

  return (
    <div className={`${classBlur}`}>
      <Header handleBurgerClick={handleBurgerClick}/>
      <Calculator classBlur={classBlur}/>
      <Advantages classBlur={classBlur}/>
      <Guarantee classBlur={classBlur}/>
      <Reviews classBlur={classBlur}/>
      <Question classBlur={classBlur}/>
      <Footer classBlur={classBlur}/>
    </div>
  )
}

export default MainPage