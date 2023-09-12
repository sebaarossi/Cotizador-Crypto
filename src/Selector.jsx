import { useState } from "react"

import Alert from "./Alert"
import Result from "./Result"

const Selector = ({moneda, setMoneda, cripto, setCripto, isValidInput, setIsValidInput}) => {


    const [alert, setAlert] = useState(false)

    const handleSubmitForm = (e) => {
        e.preventDefault()

        if ([moneda, cripto].includes('')){
            setAlert(true)
            setIsValidInput(false)
        }else{
            setAlert(false)
            setIsValidInput(true)
        }
    }

    const handleChangeCripto = (e) => {
        setIsValidInput(false)
        setCripto(e.target.value)
    }

    const handleChangeMoneda = (e) => {
        setIsValidInput(false)
        setMoneda(e.target.value)
    }

    

  return (
    <div>
        <h1 className="title">Cotiza Criptomonedas al <span className="underline"> Instante </span></h1>

        <form className="formulario" onSubmit={handleSubmitForm}>
            <div className="campo">
                <label className="label">Elige tu moneda</label>
                <select className="selector"
                        onChange={handleChangeMoneda}>
                    <option value=''> -- Seleccione -- </option>
                    <option>Dolar</option>
                    <option>Euro</option>
                    <option>Libra</option>
                    <option>Peso Argentino</option>
                </select>
            </div>
            <div className="campo">
                <label className="label">Elige tu criptomoneda</label>
                <select className="selector"
                    onChange={handleChangeCripto}>
                    <option value=''> -- Seleccione -- </option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="ethereum">Ethereum</option>
                    <option value="dogecoin">Dogecoin</option>
                    <option value="optimism">Optimism</option>
                </select>
            </div>

            {alert ? (
                <Alert />
            ): null
            }
            <button type="submit" className="cot-button">Cotizar</button>            
        </form>
        {isValidInput ? (
            <Result 
            cripto = {cripto}
            moneda = {moneda}
            />
        ) : null}
    </div>
  )
}

export default Selector
