import React from "react"

const CharacterCard = ({ id, name, status, species, type, gender, image }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
      <p>{type}</p>
      <p>{gender}</p>
      <p>{image}</p>
    </div>
  )
}

export default CharacterCard
