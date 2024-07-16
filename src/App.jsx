import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

import { useState, useEffect } from 'react'

import { fetchCharacters } from './fetch-characters'

export default function App () {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function getCharacters () {
      const fetchedCharacters = await fetchCharacters()
      setCharacters(fetchedCharacters)
    }
    getCharacters()
  }, [])

  return (
    <>
      <Header />
      <Main characters={characters} />
      <Footer />
    </>
  )
}
