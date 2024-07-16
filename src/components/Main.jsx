import { Board } from './Board'

export function Main ({ characters, score, setScore, highScore, setHighScore }) {
  if (!Array.isArray(characters)) {
    return (
      <div className='d-flex align-items center justify-content-center m-5 p-5'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <main className='my-5 py-4 container'>
      <p>
        Get points by clicking on an image, but do <b>not</b> click on any more
        than once!
      </p>
      <Board
        characters={characters}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </main>
  )
}
