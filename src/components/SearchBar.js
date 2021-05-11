import { useState, useRef } from 'react'

const SearchBar = (props) => {
    let [searchTerm, setSearchTerm] = useState('')
    const searchInput = useRef('')

    const handleSubbie = (e) => {
        console.log(searchInput.current.value)
        props.handleSearch(e, searchInput.current.value)
    }

    return (
            <form>
                <input ref={searchInput} type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={handleSubbie} />
            </form>
    )
}

export default SearchBar