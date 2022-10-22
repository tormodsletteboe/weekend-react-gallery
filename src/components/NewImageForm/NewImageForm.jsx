import {useState} from "react";

function NewImageForm({addImageToGallery}){
    let [url,setUrl] = useState('');
    let [alt,setAlt]=useState('');

    let onSubmitClick =(evt)=>{
        evt.preventdefault();
        let newImage = {
            url: url,
            alt: alt
        };
        addImageToGallery(newImage);
    };

    let handleOnUrlChange = (evt)=>{
        setUrl(evt.target.value);
    };

    let handleOnAltChange =(evt)=>{
        setAlt(evt.target.value);
    };

    return(
        <>
            <form onSubmit={onSubmitClick}>
                <input value={url} onChange={handleOnUrlChange} type="text" placeholder="url"/>
                <input value={alt} onChange={handleOnAltChange} type="text" placeholder="enter accessibility text" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default NewImageForm;