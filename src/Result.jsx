import LogoBitcoin from '../img/Bitcoin.png'
import LogoEthereum from '../img/Ethereum.png'
import LogoOptimism from '../img/Optimism.png'
import LogoDogecoin from '../img/Dogecoin.png'
import {formatearFecha, formatearHora} from '../src/helpers'

const Result = ({cripto, moneda, precio, precioAlto, precioBajo, variacion, fecha, image}) => {

    const diccionarioIconos = {
        BTC: LogoBitcoin,
        ETH: LogoEthereum,
        OP: LogoOptimism,
        dogecoin: LogoDogecoin,
    }

    const diccionarioMon = {
      USD: "USD",
      EUR: "EUR",
      GBP: "LB",
      ARS: "ARS",
    }


  return (
    <div className="result">
      <div className="contenedor-result">
        <img src={`https://cryptocompare.com/${image}`}/>
        {/* diccionarioIconos[cripto]} className={`${(cripto === 'BTC' || cripto.id === 'ethereum') ? 'btc' : ''}` */}
      </div>
      <div className="contenedor-result">
        <p className="result-data-header">{`El precio es de: ${precio}`} </p>
        <p className="result-data">{`Precio más alto del día: ${precioAlto}`}</p>
        <p className="result-data">{`Precio más bajo del día: ${precioBajo}`}</p>
        <p className="result-data">{`Variación últimas 24hs: ${variacion}`}</p>
        <p className="result-data">{`Última actualización: ${formatearFecha(fecha)} a las ${formatearHora(fecha)}`}</p>
      </div>
    </div>
  )
}

export default Result
