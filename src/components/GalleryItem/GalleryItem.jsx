import Button from 'react-bootstrap/Button';
import {useState} from 'react';


function GalleryItem({gallItem}){

    let [isActive,setActive]=useState('false');
    let [count,setCount] = useState(0);

    let handleOnClickImg = ()=>{
        // console.log('gallItem',gallItem.target.clientWidth);
        // console.log('gallItem',gallItem.target.clientHeight);
        // gallItem.target.toggleClass('figCaptionControl');
        setActive(!isActive);
      };

    let handleOnButtonClick = ()=>{
        setCount(count+1);
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
                        <Button onClick={handleOnButtonClick} variant="dark" size="sm">{count>0 ? count : ''} Likes 👍</Button>
                    </div>
                </figure>
            </div>
        </>
    );
}
export default GalleryItem;