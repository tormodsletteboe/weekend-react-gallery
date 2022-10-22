import Button from 'react-bootstrap/Button';
import {useState} from 'react';


function GalleryItem({gallItem,handleLikes,handleDelete}){

    let [isActive,setActive]=useState('false');
    

    let handleOnClickImg = ()=>{
        // console.log('gallItem',gallItem.target.clientWidth);
        // console.log('gallItem',gallItem.target.clientHeight);
        // gallItem.target.toggleClass('figCaptionControl');
        setActive(!isActive);
      };

   let onClickLikes =()=>{
        console.log('gal item id',gallItem.id);
        handleLikes(gallItem);
   };

   let onClickDelete=()=>{
    handleDelete(gallItem);
   };

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