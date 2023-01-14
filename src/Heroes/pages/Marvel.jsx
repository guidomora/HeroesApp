import React from 'react'
import HeroeList from '../Components/HeroeList'
import { heroes } from '../Data/heroes'

const Marvel = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <HeroeList
      publisher="Marvel Comics" 
      />
    </div>
    
  )
}

export default Marvel