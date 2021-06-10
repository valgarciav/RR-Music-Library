import './App.css';
import { useState, Suspense, useEffect } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource } from './helper'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      setData(createResource(searchTerm))
  }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

  const renderSearch = () => {
    if(data){
      return (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Gallery data={data} />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderSearch()}
    </div>
  );
}

export default App;