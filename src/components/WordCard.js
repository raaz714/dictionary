import "./WordCard.css"

const WordCard = (props) => {
  return (
    <div className='card'>
      <h1>{props.word}</h1>
      <ul className='content'>
        {props.definitions &&
          props.definitions.map((definition, idx) => (
            <li key={idx}>{definition}</li>
          ))}
      </ul>
    </div>
  )
}

export { WordCard }
