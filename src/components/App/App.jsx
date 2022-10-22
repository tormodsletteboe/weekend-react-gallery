import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";
import GalleryList from '../GalleryList/GalleryList';
import NewImageForm from '../NewImageForm/NewImageForm';

//App
//"main" function
function App() {

  //the App component state
  let [listOfGalleryItems,setlistOfGalleryItems] = useState([]);
  

  //on load
  useEffect(()=>{
    //get the galleryItems from the database
    getGalleryItems();
  },[]);

  //getGalleryItems
  //get gallery items from the database and set the app state
  const getGalleryItems = ()=>{
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response)=>{
      setlistOfGalleryItems(response.data);
    })
    .catch((err)=>{
      console.error('axios GET error',err);
    });
  };

  //updateLikesCount
  //update the like count of a specific gallery item  when Like button on that specific gallery item is clicked
  const updateLikesCount = (galleryItem)=>{
  
    axios({
      method: 'PUT',
      url: `/gallery/like/${galleryItem.id}`
    })
    .then((response)=>{
      console.log('data PUT',response)
      getGalleryItems();
      
    })
    .catch((err)=>{
      console.error('axios PUT error',err);
    });
  };
  
  //addImage
  //add a new image to the gallery
  const addImage = (galleryItem)=>{
    axios({
      method: 'POST',
      url: `/gallery`,
      data: galleryItem
    })
    .then((response)=>{
      //update the state by making a call to the database
      getGalleryItems();
      
    })
    .catch((err)=>{
      console.error('axios POST error',err);
    });
  };
  
  //deleteImage
  //remove an image from the gallery
  const deleteImage = (galleryItem)=>{
    console.log('in deleteImage')
    axios({
      method: 'DELETE',
      url: `/gallery/${galleryItem.id}`,
    })
    .then((response)=>{
      //image has been removed, update the state by making a call to the database
      getGalleryItems();
    })
    .catch((err)=>{
      console.error('axios DELETE error',err);
    });
  };

  //render the Gallery with its components to the DOM
    return (
      <div className = "App" >
        <header className = "App-header" >
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* {Input form here} */}
        <NewImageForm addImageToGallery={addImage}/>
        {/* {gallery here} */}
        <GalleryList listOfGalleryItems={listOfGalleryItems} handleLikes={updateLikesCount} handleDelete={deleteImage} />
      </div>
    );
}

export default App;