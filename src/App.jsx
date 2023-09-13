import { useState } from 'react'

import './App.css'


import Selector from './Selector'

function App() {

  const [moneda, setMoneda] = useState('')
  const [cripto, setCripto] = useState('')
  const [cargando, setCargando] = useState(false)

  const [isValidInput, setIsValidInput] = useState(false)

  return (
    <div className='principal'>
      <div className='contenedor'>
        <img src= "../img/imagen-criptos.png"/>
      </div>
      <div className='contenedor sel'>
        <Selector
          moneda = {moneda}
          setMoneda = {setMoneda}
          cripto = {cripto}
          setCripto = {setCripto}
          isValidInput = {isValidInput}
          setIsValidInput = {setIsValidInput}
          cargando = {cargando}
          setCargando = {setCargando}
          />
      </div>
      
    </div>
  )
}

export default App
