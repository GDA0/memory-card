export function Header ({ score, highScore }) {
  return (
    <header>
      <nav className='navbar fixed-top bg-white container-fluid border-bottom border-1'>
        <div className='container d-flex justify-content-between'>
          <span className='navbar-brand mb-0 h1'>Memory Card</span>
          <div>
            <h5 className='mb-0'>
              Score: <span>{score}</span>
            </h5>
            <h5 className='mb-0'>
              High score: <span>{highScore}</span>
            </h5>
          </div>
        </div>
      </nav>
    </header>
  )
}
