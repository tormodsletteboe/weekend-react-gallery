
import GalleryItem from "../GalleryItem/GalleryItem";

//GalleryList
//Component for the Gallery, pipes through handles for GalleryItem Likes and Deletes
function GalleryList({listOfGalleryItems,handleLikes,handleDelete}){

    //render GalleryList to the DOM
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