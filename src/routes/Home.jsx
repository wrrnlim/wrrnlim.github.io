import '../css/App.css';
import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Background>
        <Header />
      </Background>
    </>
  )
}
