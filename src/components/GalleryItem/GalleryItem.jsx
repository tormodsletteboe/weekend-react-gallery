import Button from 'react-bootstrap/Button';
import {useState} from 'react';


function GalleryItem({gallItem,handleLikes}){

    let [isActive,setActive]=useState('false');
    

    let handleOnClickImg = ()=>{
        // console.log('gallItem',gallItem.target.clientWidth);
        // console.log('gallItem',gallItem.target.clientHeight);
        // gallItem.target.toggleClass('figCaptionControl');
        setActive(!isActive);
      };

   

    return(
        <>
        <div className={'ImageDiv'} >
                <figure>
                    <img  onClick={handleOnClickImg} src={gallItem.path} alt={gallItem.description} />
                    <figcaption className={isActive ? 'figCaptionControl' : null}>
                        {gallItem.description}
                    </figcaption>
                    <div className='bg-dark'>
                        <Button onClick={handleLikes} variant="dark" size="sm"> Likes 👍</Button>
                    </div>
                </figure>
            </div>
        </>
    );
}
export default GalleryItem;