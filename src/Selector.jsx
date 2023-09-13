import { useState, useEffect } from "react"

import Alert from "./Alert"
import Result from "./Result"
import Spinner from "./Spinner"
import { monedas } from "./data/monedas"

import useSelectMonedas from "./hooks/useSelectMonedas"

const Selector = ({moneda, setMoneda, cripto, setCripto, isValidInput, setIsValidInput, cargando, setCargando}) => {


    const [criptos, setCriptos] = useState([])

    const [SelectMonedas] = useSelectMonedas()

    const [alert, setAlert] = useState(false)

    const [precio, setPrecio] = useState(0)
    const [precioAlto, setPrecioAlto] = useState(0)
    const [precioBajo, setPrecioBajo] = useState(0)
    const [variacion, setVariacion] = useState()
    const [fecha, setFecha] = useState()
    const [image, setImage] = useState('')

    const handleSubmitForm = (e) => {
        e.preventDefault()

        if ([moneda, cripto].includes('')){
            setAlert(true)
            setIsValidInput(false)
        }else{
            setAlert(false)
            setIsValidInput(true)
            consultarValores(moneda, cripto)
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

    const consultarValores = async (moneda, cripto) => {

        setCargando(true)

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        
        const response = await fetch(url)

        const respuesta = await response.json()


        setPrecio(respuesta.DISPLAY[cripto][moneda].PRICE)
        setPrecioAlto(respuesta.DISPLAY[cripto][moneda].HIGHDAY)
        setPrecioBajo(respuesta.DISPLAY[cripto][moneda].LOWDAY)
        setVariacion(respuesta.DISPLAY[cripto][moneda].CHANGEDAY)
        setFecha(Date.now())
        setImage(respuesta.DISPLAY[cripto][moneda].IMAGEURL)

        setTimeout(() => {
            setCargando(false)
        },1500)
        

    }

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"

            const respuesta = await fetch(url)

            const resultado = await respuesta.json()


            const arrayCryptos = resultado.Data.map(cripto => {
                
                const objeto = {
                    id : cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName,
                }
                
                return objeto
            })

            
            setCriptos(arrayCryptos)
        }
        consultarAPI();
    }, [])

  return (
    <div>
        <h1 className="title">Cotiza Criptomonedas al <span className="underline"> Instante </span></h1>

        <form className="formulario" onSubmit={handleSubmitForm}>
            <div className="campo">
                <label className="label">Elige tu moneda</label>
                <select className="selector"
                        onChange={handleChangeMoneda}>
                    <option value=''> -- Seleccione -- </option>
                    {monedas.map(moneda => {
                        return (
                            <option
                                key= {moneda.id}
                                value={moneda.id}>
                            {moneda.nombre}   
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className="campo">
                <label className="label">Elige tu criptomoneda</label>
                <select className="selector"
                    onChange={handleChangeCripto}>
                    <option value=''> -- Seleccione -- </option>
                    {criptos.map(cripto => {
                        return (
                            <option
                                key= {cripto.id}
                                value={cripto.id}>
                            {cripto.name}   
                            </option>
                        )
                    })}
                </select>
            </div>

            {alert ? (
                <Alert />
            ): null
            }
            <button type="submit" className="cot-button">Cotizar</button>            
        </form>
        {(isValidInput && cargando ) ? (
            <div className="spinner">
                <Spinner />
            </div>
            
        ) : (isValidInput ? (
            <Result 
            cripto = {cripto}
            moneda = {moneda}
            precio = {precio}
            precioAlto = {precioAlto}
            precioBajo = {precioBajo}
            variacion = {variacion}
            fecha = {fecha}
            image = {image}
            />
        ) : null)}
    </div>
  )
}

export default Selector
