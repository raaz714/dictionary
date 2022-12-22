import { useState } from "react"
import { WordCard } from "./components/WordCard"
import words from "./dictionary_json/dictionary.json"
import "./App.css"

const App = () => {
  const [dwords, setDwords] = useState(words)
  const [query, setQuery] = useState("")

  const onQueryChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const matchWord = (word) => {
    return word.word.toLowerCase().includes(query.toLowerCase())
  }

  return (
    <div className='App'>
      <input
        className='searchbar'
        placeholder='Search word'
        onChange={(event) => onQueryChange(event)}
      />
      <div className='container'>
        {dwords &&
          dwords
            .filter(matchWord)
            .slice(0, 10)
            .map((word, idx) => (
              <WordCard
                key={idx}
                word={word.word}
                definitions={word.definitions}
              />
            ))}
      </div>
    </div>
  )
}

export default App
