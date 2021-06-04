import {useEffect, useState} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'

const ArtistView = (props) => {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const history = useHistory()
    
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
            setLoading(false)
        }
        fetchData()
    }, [id])

    const allAlbums = artistData.filter(entity => entity.collectionType === 'Album')
                        .map((album, i) => { 
                            return (
                                <div key={i}>
                                    <Link to={`/album/${album.collectionId}`}>
                                        <p>{album.collectionName}</p>
                                    </Link>
                                </div>)
                                })
    
    const navButtons = () => {
        return (
            <div>
                <button onClick={() => {history.push('/')}}>Home</button> | <button onClick={() => history.goBack()}>Back</button>
            </div>
        )
    }

    return (
        <div>
            {loading ? <p>loading</p> : <h2>{artistData[0].artistName}</h2>}
            {navButtons()}
            {allAlbums}
        </div>
    )
}

export default ArtistView