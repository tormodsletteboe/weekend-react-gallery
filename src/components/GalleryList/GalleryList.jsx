
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({listOfGalleryItems,handleLikes,handleDelete}){

    return(
        <>
            <div className='Gallery'>
            {listOfGalleryItems.map(gallItem=>(
                <GalleryItem key={gallItem.id} gallItem={gallItem} handleLikes={handleLikes} handleDelete={handleDelete}/>
            ))}
            </div>
        </>
    );
}
export default GalleryList;