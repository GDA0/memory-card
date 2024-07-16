export function Card ({ image, name, onClick }) {
  return (
    <div className='card h-100' onClick={onClick}>
      <img className='card-img-top' src={image} alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
      </div>
    </div>
  )
}
