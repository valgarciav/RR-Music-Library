import {useEffect, useState} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'

const AlbumView = (props) => {
    const { id } = useParams()
    const history = useHistory()
    const [ albumData, setAlbumData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            const API_URL = `http://localhost:4000/song/${id}`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
            setLoading(false)
        }
        fetchData()
    }, [id])

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => {history.push('/')}}>Home</button> | <button onClick={() => history.goBack()}>Back</button>
            </div>
        )
    }

    const allAlbums =   albumData.filter(entity => entity.kind === 'song')
                        .map((album, i) => { return (<div key={i}>{album.trackName}</div>)})

    return (
        <div>
            {loading ? <p>Loading...</p> : <h2>{albumData[0].artistName}</h2>}
            {navButtons()}
            {allAlbums}
        </div>
    )
}

export default AlbumView