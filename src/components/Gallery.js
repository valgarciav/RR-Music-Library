import GalleryItem from './GalleryItem'


const Gallery = ({ data }) => {
    const myData = data.result.read()

    const display = myData.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery