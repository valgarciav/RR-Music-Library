import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

const ArtistView = (props) => {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const API_URL = `https://music-library-helper.herokuapp.com/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
            setLoading(false)
        }
        fetchData()
    }, [id])

    const allAlbums =   artistData.filter(entity => entity.collectionType === 'Album')
                        .map((album, i) => { return (<div key={i}><Link to={`/album/${album.collectionId}`}>{album.collectionName}</Link></div>)})

    const displayData = () => {
        return (
            <div>
                <h1>{artistData[0].artistName}</h1>
                {allAlbums}
                <Link to="/">Home</Link>
            </div>
        )
    }

    return (
        <div>
            {loading ? <div>loading</div> : displayData()}
        </div>
    )
}

export default ArtistView