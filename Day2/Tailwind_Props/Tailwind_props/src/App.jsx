import { useState } from 'react'
import './App.css'
import Card from './components/card'


function App() {

  let myObj ={
    name: "John Doe",
    age: 120
  }

  return (
    <>
      <Card channel = "Main Channel"/>
      <Card channel = "Second Channel" btnText="Visit Me"/>
    </>
  )
}

export default App
