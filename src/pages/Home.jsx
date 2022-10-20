import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
  return (
    <div className='pokedex'>
      <div className='pokedex__container'>
          <img className='pokedex__img' src="./pokeapi.png" alt="" />
        <section className='pokedex__head'>
        <h2 className='pokedex__subt'>Hello Trainer!!</h2>
        </section>
        <img src="" alt="" />
        </div>
        <FormHome/>

    </div>
  )
}

export default Home