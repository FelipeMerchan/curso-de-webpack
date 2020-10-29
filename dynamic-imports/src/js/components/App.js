import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

function App() {
  const [loaderList, setLoaderList] = useState([])
  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert.js')
    alerta('Este módulo ha cargado dinámicamente.')
  }

  return (
    <div>
      <p className="sass">Esto es sass</p>
      <p className="less">Esto es less</p>
      <p className="stylus">Esto es stylus</p>
      <p className="post-css">Esto es PostCSS</p>
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        Qué linda aplicación en React.js
        <img src={logo} width="40" />
      </p>
      <ul>
        {
          loaderList.map(loader => <Loader {...loader} key={loader.id} />)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </div>
  )
}

export default App