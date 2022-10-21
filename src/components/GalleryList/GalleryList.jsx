
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({listOfGalleryItems}){


   

    return(
        <>
            <div className='Gallery'>
            {listOfGalleryItems.map(gallItem=>(
                <GalleryItem key={gallItem.id} gallItem={gallItem} />
            ))}
            </div>
        </>
    );
}
export default GalleryList;