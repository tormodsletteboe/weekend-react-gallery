import {useState} from "react";

function NewImageForm({addImageToGallery}){

    //the state of this component
    let [url,setUrl] = useState('');
    let [alt,setAlt]=useState('');

    //onSubmitClick
    //executed when the user clicks or hits enter button 
    const onSubmitClick =(evt)=>{
        evt.preventDefault();
       
        //get the data to be sent to the database
        let newImage = {
            path: url,
            description: alt
        };
        
        //callback to app.jsx addImage function
        addImageToGallery(newImage);

        //clear user input
        setUrl('');
        setAlt('');
    };

    //handleOnUrlChange
    //handle any change to the url input, update state url for any change
    let handleOnUrlChange = (evt)=>{
        setUrl(evt.target.value);
    };

    //handleOnAltChange
    //handle any change to the description input, update alt state for any change
    let handleOnAltChange =(evt)=>{
        setAlt(evt.target.value);
    };

    //render the form to the DOM
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