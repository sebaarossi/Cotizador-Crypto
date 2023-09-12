import LogoBitcoin from '../img/Bitcoin.png'
import LogoEthereum from '../img/Ethereum.png'
import LogoOptimism from '../img/Optimism.png'
import LogoDogecoin from '../img/Dogecoin.png'

const Result = ({cripto, moneda}) => {

    const diccionarioIconos = {
        bitcoin: LogoBitcoin,
        ethereum: LogoEthereum,
        optimism: LogoOptimism,
        dogecoin: LogoDogecoin,
    }

  return (
    <div className="result">
      <div className="contenedor">
        <img src={diccionarioIconos[cripto]}/>
      </div>
      <div className="contenedor">
        <p className="result-data-header">El precio es de: $ </p>
        <p className="result-data">Precio más alto del día: </p>
        <p className="result-data">Precio más bajo del día: </p>
        <p className="result-data">Variación últimas 24hs: </p>
        <p className="result-data">Última actualización: </p>
      </div>
    </div>
  )
}

export default Result
