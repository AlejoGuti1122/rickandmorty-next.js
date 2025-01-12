"use client"

import { getCharacters } from "@/services/api"
import React, { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard"

const CharactersList = ({ currentPage }) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharactersFunction(currentPage)
  }, [currentPage])

  const getCharactersFunction = async (page) => {
    try {
      const response = await getCharacters(page)
      setCharacters(response)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const renderCards = characters.map((card) => {
    return (
      <CharacterCard
        key={card.id}
        name={card.name}
        status={card.status}
        species={card.species}
        type={card.type}
        gender={card.gender}
        image={card.image}
      />
    )
  })

  return (
    <div className="md:grid md:grid-cols-5 flex flex-col">{renderCards}</div>
  )
}

export default CharactersList
