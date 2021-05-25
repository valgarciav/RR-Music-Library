import {useEffect} from 'react'

const AlbumView = (props) => {

    const API_URL = `https://itunes.apple.com/search?term=124910515`
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData.results)
        }
        fetchData()
    })

    return (
        <div>
            <p>AlbumView</p>
        </div>
    )
}

export default AlbumView