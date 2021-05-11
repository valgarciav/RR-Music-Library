import './App.css';
import { useEffect, useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  const searchInput = useRef('')

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      fetch(`https://itunes.apple.com/search?term=${searchTerm}`)
      .then(response => response.json())
      .then(resData => {
        if (resData.results.length > 0) {
          return setData(resData.results)
        } else {
          return setMessage('Not Found.')
        }
      })
      .catch(err => setMessage('An Error has Occurred!'))
    }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    term = toTitleCase(term)
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{searchInput, handleSearch}}>
        <SearchBar handleSearch={handleSearch} />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
