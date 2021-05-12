import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const SearchBar = () => {
    const {searchInput, handleSearch} = useContext(SearchContext)


    const handleSubbie = (e) => {
        handleSearch(e, searchInput.current.value)
    }

    return (
            <form>
                <input ref={searchInput} type="text" placeholder="Search Here" />
                <button onClick={handleSubbie}>Submit</button>
            </form>
    )
}

export default SearchBar