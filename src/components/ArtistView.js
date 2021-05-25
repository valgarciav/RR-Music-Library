import {useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ArtistView = (props) => {
    const { id } = useParams()
    
    const API_URL = `https://music-library-helper.herokuapp.com/album/${id}`
    console.log(API_URL)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
        }
        fetchData()
    })

    return (
        <div>
            <p>ArtistView</p>
        </div>
    )
}

export default ArtistView