import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src = "https://picsum.photos/id/236/200"/> */}
        {listOfGalleryItems.map(gallItem=>(
          <div className={'ImageDiv'} key={gallItem.id} >
            <figure>
              <img src={gallItem.path} alt={gallItem.description} />
              <figcaption>
                {gallItem.description}
              </figcaption>
              <Button variant="dark" size="sm">Primary</Button>
            </figure>
            
          </div>
        ))}
      </div>
    );
}

export default App;


// <figure key={item.id}>
//             <img src={item.path} alt={item.description}/>
//             <figcaption>Likes: {item.likes}</figcaption>
//           </figure>