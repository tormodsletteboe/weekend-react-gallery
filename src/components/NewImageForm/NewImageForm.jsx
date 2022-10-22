import {useState} from "react";

function NewImageForm({addImageToGallery}){
    let [url,setUrl] = useState('');
    let [alt,setAlt]=useState('');

    const onSubmitClick =(evt)=>{
        evt.preventDefault();
        console.log('in onsubmitclick');
        let newImage = {
            path: url,
            description: alt
        };
        console.log('in onsubmitclick');
        addImageToGallery(newImage);
        // setUrl('');
        // setAlt('');
    };

    let handleOnUrlChange = (evt)=>{
        console.log('in url',evt.target.value);
        setUrl(evt.target.value);
    };

    let handleOnAltChange =(evt)=>{
        console.log('in alt',evt.target.value);
        setAlt(evt.target.value);
    };

    return(
        <>
            <form onSubmit={onSubmitClick}>
                <input  value={url} onChange={handleOnUrlChange} type="text" placeholder="url..." required/>
                <input  value={alt} onChange={handleOnAltChange} type="text" placeholder="accessibility text..." required/>
                <button className="bg-light square glow" type="submit">Submit</button>
            </form>
        </>
    );
}
export default NewImageForm;