import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
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