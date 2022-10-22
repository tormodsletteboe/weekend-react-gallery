import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";
import GalleryList from '../GalleryList/GalleryList';
import NewImageForm from '../NewImageForm/NewImageForm';
function App() {

  let [listOfGalleryItems,setlistOfGalleryItems] = useState([]);
  

  //on load
  useEffect(()=>{
    console.log('in useeffect');
    getGalleryItems();
  },[]);

  //get gallery items from gallery.data.js
  let getGalleryItems = ()=>{
    console.log('in getGalleryItems');
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response)=>{
      console.log('data',response.data)
      setlistOfGalleryItems(response.data);
      
    })
    .catch((err)=>{
      console.error('axios GET error',err);
    });
  };

  let updateLikesCount = (galleryItem)=>{
    console.log('galllllllitem.id',galleryItem.id);
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
  
  let addImage = (galleryItem)=>{
   
    axios({
      method: 'POST',
      url: `/gallery`,
      data: galleryItem
    })
    .then((response)=>{
      console.log('data POST',response)
      getGalleryItems();
      
    })
    .catch((err)=>{
      console.error('axios PUT error',err);
    });
  };
  

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <NewImageForm addImageToGallery={addImage}/>
        {/* {galleryhere} */}
        <GalleryList listOfGalleryItems={listOfGalleryItems} handleLikes={updateLikesCount} />
      </div>
    );
}

export default App;