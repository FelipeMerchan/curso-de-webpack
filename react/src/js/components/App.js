import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'

function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
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