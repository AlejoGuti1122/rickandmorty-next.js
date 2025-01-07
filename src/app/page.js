import CharactersList from "@/components/CharactersList"
import Tittle from "@/components/Tittle"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Tittle/>
      <CharactersList />
    </div>
  )
}
