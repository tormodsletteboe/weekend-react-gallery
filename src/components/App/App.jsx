import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";
import GalleryList from '../GalleryList/GalleryList';

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
    axios({
      method: 'PUT',
      url: `/gallery/like/${galleryItem.id}`
    })
    .then((response)=>{
      console.log('data',response.data)
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
        {/* {galleryhere} */}
        <GalleryList listOfGalleryItems={listOfGalleryItems} handleLikes={updateLikesCount} />
      </div>
    );
}

export default App;