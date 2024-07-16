export function Main ({ characters }) {
  if (!Array.isArray(characters)) {
    return (
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )
  }

  const characterCards = characters.map((character) => (
    <div key={character.id} className='col'>
      <div className='card h-100'>
        <img
          className='card-img-top'
          src={character.image}
          alt={character.name}
        />
        <div className='card-body'>
          <h5 className='card-title'>{character.name}</h5>
        </div>
      </div>
    </div>
  ))

  return (
    <main className='my-5 py-3 container'>
      <p>
        Get points by clicking on an image, but do <b>not</b> click on any more
        than once!
      </p>
      <div className='row row-cols-4 g-4'>{characterCards}</div>
    </main>
  )
}
