import React from "react"

const CharacterCard = ({ id, name, status, species, type, gender, image }) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 m-2 bg-slate-800 ">
      <div className="flex justify-center items-center">
        <img
          className="rounded-full transform transition-transform duration-300 hover:scale-125 hover:rotate-y-180"
          src={image}
          alt={name}
          width={100}
        />
      </div>
      <div className="text-center mt-2">
        <p>{name}</p>
      </div>
      <div className="text-center">
        {/* <p>ID: {id}</p> */}
        <p>Status: {status}</p>
      </div>
      <div className="text-center">
        <p>Species: {species}</p>
        <p>Type: {type}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  )
}

export default CharacterCard
