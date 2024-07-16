import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

import { useState, useEffect } from 'react'

import { fetchCharacters } from './fetch-characters'

export default function App () {
  const [characters, setCharacters] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    async function getCharacters () {
      const fetchedCharacters = await fetchCharacters()
      setCharacters(fetchedCharacters)
    }
    getCharacters()
  }, [])

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Main
        characters={characters}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <Footer />
    </>
  )
}
