'use client'
import { useEffect, useState } from "react"

import data from "./assert/data.json"
import { Box } from "./components/Box"
export default function Home() {


  const [cards, setCards] = useState([])
  const [saveId, setSaveid] = useState(-1)
  const [clicked, setClicked] = useState(0)
  const [beforeclick, setBeforeclick] = useState()



  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    setCards(array)
  }

  useEffect(() => {
    shuffle(data)
  }, [])

  useEffect(() => { console.log(cards) }, [cards])

  return (
    <div className="w-screen  h-screen">
      <div className="flex gap-10 flex-wrap justify-center items-center mt-20">
        {cards.map((element, index) => (
          <Box img={element.picture}
            id={element.id}
            index={index}
            setCards={setCards}
            chosen={element.chosen}
            cards={cards}
            saveid={saveId}
            setSaveid={setSaveid}
            clicked={clicked}
            setClicked={setClicked}
            beforeclick={beforeclick}
            setBeforeclick={setBeforeclick}
          />
        )
        )

        }
      </div>
    </div>
  )
}
