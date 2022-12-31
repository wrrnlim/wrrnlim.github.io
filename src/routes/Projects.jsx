import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

export default function Projects() {
  return (
    <Background>
      <Navbar/>
      <Card
        title='TabViewer'
        text='TabViewer is an Electron project that allows users to view all their musical tabs in one place. TabViewer opens folders containing PDF music tabs, and allows the user to switch between songs, keys, and instrument sheets.'
        badge='https://img.shields.io/github/last-commit/wrrnlim/tabviewer?style=flat-square'
        codeURL='https://github.com/wrrnlim/TabViewer'
      />
    </Background>
  )
}
