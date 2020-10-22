import '../css/index.css'
import search from './search'
import render from './render'

const id = prompt('Quién es ese Pokemón')

search(id)
  .then((data) => {
    render(data)
  })
  .catch(() => {
    console.log('No se encontró un Pokemón. Revisa el id ingresado.')
  })