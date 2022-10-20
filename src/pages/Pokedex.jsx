import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import PokeCard from '../components/pokedex/PokeCard'
import SelectByType from '../components/pokedexid/SelectByType'
import './styles/pokedex.css'
import IsLoading from '../components/pokedex/IsLoading'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      //seleccionando por typo
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {

      //todos los pokemon
      const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

      axios.get(url)
        .then(res => {
         setTimeout(()=>{
          setPokemons(res.data.results)
          setisLoading(false)
        },1500) 
        })
        .catch(err => console.log(err))
    }

  }, [typeSelected])



  const userName = useSelector(state => state.userName)
  //paginación
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(10)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div>
    {
      isLoading ?
      
      <IsLoading/>
      
      :
      
      <div className='pokemons'>
      <img className='pokemons__img' src="./src/assets/pokedex.png" alt="" />
      <p className='pokemons__p'><span className='pokemons__span'>Welcome {userName}</span>, here you can find your favorite pokemon.</p>
      <aside className='pokemons__aside'>
        <InputSearch />
        <SelectByType
          setTypeSelected={setTypeSelected}
          setPage={setPage}
        />
      </aside>

      <div className='pokemons__card-container'>

        {
          pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
            <PokeCard
              key={pokemon.url}
              url={pokemon.url}


            />

          ))
        }


      </div>
      <Pagination
        page={page}
        setPage={setPage}
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
      />
    </div>}
    </div>
  )
}

export default Pokedex