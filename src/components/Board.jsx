import { useState, useEffect } from 'react'
import { Card } from './Card'

export function Board ({
  characters,
  score,
  setScore,
  highScore,
  setHighScore
}) {
  const [shuffledCharacters, setShuffledCharacters] = useState([])
  const [clickedCharacterIds, setClickedCharacterIds] = useState([])

  useEffect(() => {
    setShuffledCharacters(shuffle(characters))
  }, [characters])

  function shuffle (characters) {
    const shuffledCharacters = characters.slice()
    for (let i = shuffledCharacters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCharacters[i], shuffledCharacters[j]] = [
        shuffledCharacters[j],
        shuffledCharacters[i]
      ]
    }
    return shuffledCharacters
  }

  function handleCharacterClick (characterId) {
    if (clickedCharacterIds.includes(characterId)) {
      // Reset game
      setScore(0)
      setClickedCharacterIds([])
    } else {
      setClickedCharacterIds([...clickedCharacterIds, characterId])
      setScore(score + 1)
      if (score + 1 > highScore) {
        setHighScore(score + 1)
      }
    }
    setShuffledCharacters(shuffle(characters))
  }

  return (
    <div className='row row-cols-4 g-4'>
      {shuffledCharacters.map((shuffledCharacter) => (
        <div className='col' key={shuffledCharacter.id}>
          <Card
            name={shuffledCharacter.name}
            image={shuffledCharacter.image}
            onClick={() => handleCharacterClick(shuffledCharacter.id)}
          />
        </div>
      ))}
    </div>
  )
}
