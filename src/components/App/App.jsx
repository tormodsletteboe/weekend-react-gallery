import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';

function App() {

  let [listOfGalleryItems,setlistOfGalleryItems] = useState([]);

  useEffect((evt)=>{
    //getGalleryItems();
  },[]);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        
        <img src="https://picsum.photos/id/236/200"/>
        <img src="https://picsum.photos/id/10/200"/>
        <img src="https://picsum.photos/id/1001/200"/>
        <img src="https://picsum.photos/id/237/200"/>
        <img src="https://picsum.photos/id/1000/200"/>
        
      </div>
    );
}

export default App;
