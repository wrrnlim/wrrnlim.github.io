import React from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TitleCard from '../components/TitleCard'

export default function Projects() {
  const privateBadge = 'https://img.shields.io/badge/last%20commit-private%20repo-inactive?style=flat-square'
  return (
    <Background>
      <Navbar/>
      <div className='mt-4'></div>
      <TitleCard
        title='PROJECTS'
        subtitle='Showcasing some of my projects'
      />
      <Card
        title='wrrnlim.github.io'
        text='This is the current website you are viewing! It was created using React with Material Design Bootstrap for the UI and Vite for development.'
        badge='https://img.shields.io/github/last-commit/wrrnlim/wrrnlim.github.io?style=flat-square'
        codeURL='https://github.com/wrrnlim/wrrnlim.github.io'
        notesURL='https://github.com/wrrnlim/wrrnlim.github.io/blob/dev/README.md'
      />
      <Card
        title='Electron App Template'
        text='An Electron app template that I wrote while learning how to create Electron apps. This template includes an updater that checks the GitHub repository for any new releases, and automatically downloads and installs the newest version if available. Notes are available for this repository, and include a guide of what I did to create the template.'
        badge='https://img.shields.io/github/last-commit/wrrnlim/electron-app-template?style=flat-square'
        codeURL='https://github.com/wrrnlim/electron-app-template'
        notesURL='https://github.com/wrrnlim/electron-app-template/wiki/Starting-an-Electron-Project'
      />
      <Card
        title='Discord.js Bot Template'
        text='A template repository I created while learning how to create Discord.js bots. I created this template so that I (or anyone else) can quickly begin working on a Discord bot. Notes are available for this repository and includes a full tutorial on how to create a Discord bot and host it on Heroku. '
        badge='https://img.shields.io/github/last-commit/wrrnlim/discordjs-bot-template?style=flat-square'
        codeURL='https://github.com/wrrnlim/discordjs-bot-template'
        notesURL='https://github.com/wrrnlim/discordjs-bot-template/blob/main/README.md'
      />
      <Card
        title='TabViewer'
        text='TabViewer is an Electron project that allows users to view all their musical tabs in one place. TabViewer opens folders containing PDF music tabs, and allows the user to switch between songs, keys, and instrument sheets.'
        badge='https://img.shields.io/github/last-commit/wrrnlim/tabviewer?style=flat-square'
        codeURL='https://github.com/wrrnlim/TabViewer'
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
