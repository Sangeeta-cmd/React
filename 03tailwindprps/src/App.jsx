import { useState } from 'react'

import './App.css'

import Card from './components/Card'

function App() {
  let myObj = {
    username : 'SangeetaPujari',
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card prodName = "Boll Pen"  price = "345" />
      <Card prodName = "Pencil"  price = "500" />
          
    </>
  )
}

export default App
