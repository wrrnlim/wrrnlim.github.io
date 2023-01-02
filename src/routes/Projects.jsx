import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Projects() {
  const privateBadge = 'https://img.shields.io/badge/last%20commit-private%20repo-inactive?style=flat-square'
  return (
    <Background>
      <Navbar/>
      <div className='mt-4'></div>
      <Card
        title='TabViewer'
        text='TabViewer is an Electron project that allows users to view all their musical tabs in one place. TabViewer opens folders containing PDF music tabs, and allows the user to switch between songs, keys, and instrument sheets.'
        badge='https://img.shields.io/github/last-commit/wrrnlim/tabviewer?style=flat-square'
        codeURL='https://github.com/wrrnlim/TabViewer'
      />
      <Card
        title='wrrnlim.github.io'
        text='This website was created using React with Material Design Bootstrap for the UI and Vite for development.'
        badge={privateBadge}
        codeURL='https://github.com/wrrnlim/wrrnlim.github.io'
      />
      <Card
        title='PassMan'
        text='PassMan is a simple password manager built in Python that encrypts and stores passwords. It has a login system with mutiple account support, and has simple interface that allows users to add, delete, or alter stored passwords. It uses SQLite3 to store passwords encrypted with the cryptography library.'
        badge='https://img.shields.io/github/last-commit/wrrnlim/PassMan?style=flat-square'
        codeURL='https://github.com/wrrnlim/PassMan'
      />
      <Footer />
    </Background>
  )
}
