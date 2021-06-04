import { useState } from 'react'
import { Link } from 'react-router-dom'

const GalleryItem = (props) => {
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div style={{
                'width': '25vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin' : '2px',
                'position': 'relative'
            }}>
                <h3>{props.d.trackName}</h3>
                <h4>{props.d.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={{
                'width': '80vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin' : '2px',
                'position': 'relative',
                'backgroundImage': `url(${props.d.artworkUrl100})`,
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover',
                'color': 'white'
            }}>
                <h2>"{props.d.trackName}"</h2>
                <h3><Link to={`/artist/${props.d.artistId}`}>{props.d.artistName}</Link></h3>
                <p><Link to={`/album/${props.d.collectionId}`}>{props.d.collectionName}</Link></p>
                <h4>{props.d.primaryGenreName}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
} 

export default GalleryItem