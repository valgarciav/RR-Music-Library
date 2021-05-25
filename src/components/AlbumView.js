import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

const AlbumView = (props) => {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            const API_URL = `https://music-library-helper.herokuapp.com/song/${id}`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
            setLoading(false)
        }
        fetchData()
    }, [id])

    const allAlbums =   albumData.filter(entity => entity.kind === 'song')
                        .map((album, i) => { return (<div key={i}>{album.trackName}</div>)})

    const displayData = () => {
        return (
            <div>
                <h1>{albumData[0].collectionName}</h1>
                {allAlbums}
                <Link to="/">Home</Link> | <Link to={`/artist/${albumData[0].artistId}`}>Back to Album View</Link>
            </div>
        )
    }

    return (
        <div>
            {loading ? <div>loading</div> : displayData()}
        </div>
    )
}

export default AlbumView