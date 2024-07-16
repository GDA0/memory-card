export async function fetchCharacters (count = 12) {
  const ids = Array.from({ length: count }, (_, i) => i + 1).join(',')
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ids}`
  )
  const data = await response.json()
  return data.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image
  }))
}
