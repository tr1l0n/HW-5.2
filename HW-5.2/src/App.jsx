import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Greeting from './components/Greeting'
import Message from './components/Message'
import Button from './components/Button'
import './App.css'

function App() {
  let text = 'hi everyone';
  function ShowMessage() {
    console.log(text);
  }
  return (
    <>
      <Greeting name={'Ivan'}></Greeting>
      <Message text={text}></Message>
      <Button onClick={ShowMessage}/>
    </>
  )
}

export default App
