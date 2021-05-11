import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    const data = useContext(DataContext)

    const display = data.map((d, i) => {
        return (
            <GalleryItem d={d} key={i} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery