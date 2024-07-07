import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  return (
    <>
      <h1 className='bg-green-600 p-4'>Currency</h1>
      <button onClick={useCurrencyInfo("usd")}>Click here</button>
    </>
  )
}

export default App
