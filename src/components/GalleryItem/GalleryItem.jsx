import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import Swal from 'sweetalert2'

//GalleryItem
//1 image with caption, like button and remove button
function GalleryItem({gallItem,handleLikes,handleDelete}){

    //control what to render, caption or no caption, used with image click
    let [isActive,setActive]=useState('false');
    
    //handleOnClickImg
    //toggle caption on or off
    let handleOnClickImg = ()=>{
        setActive(!isActive);
      };

   //onClickLikes
   //calls back to app.jsx updateLikesCount to increase the likes count for this gallery item in the database
   let onClickLikes =()=>{
        handleLikes(gallItem);
   };

   //onClickDelete
   //calls back to app.jsx deleteImage to remove gallery item from the database
   let onClickDelete=()=>{
    //ask user if they are sure using this sweetalert2 dialog box
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        //if user is sure, remove gallery item
        if (result.isConfirmed) {
            //the actual callback to app.jsx deleteImage
            handleDelete(gallItem);
        }
      })

   
   };

   //render Gallery item to the dom
    return(
        <>
        <div className={'ImageDiv'} >
                <figure>
                    <img  onClick={handleOnClickImg} src={gallItem.path} alt={gallItem.description} style={{height : 188, width : 188}} />
                    <figcaption className={isActive ? 'figCaptionControl' : null}>
                        {gallItem.description}
                    </figcaption>
                    <div className='bg-dark'>
                        <Button onClick={onClickLikes} variant="dark" size="sm">{gallItem.likes} Likes 👍</Button>
                        <Button onClick={onClickDelete} variant="dark" size="sm">X</Button>
                    </div>
                </figure>
            </div>
        </>
    );
}
export default GalleryItem;