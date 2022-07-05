import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function FakeFetch() {
  const request = {
    "name": "cat place holder",
    "images": [
      { "name": "cat1", "src" : "https://placekitten.com/200/300" },
      { "name": "cat2", "src" : "https://placekitten.com/300/300" },
      { "name": "cat3", "src" : "https://placekitten.com/300/300" },
      { "name": "cat4", "src" : "https://placekitten.com/400/300" },
      { "name": "cat5", "src" : "https://placekitten.com/430/300" },
      { "name": "cat6", "src" : "https://placekitten.com/400/400" },
      { "name": "cat7", "src" : "https://placekitten.com/400/300" },
      { "name": "cat8", "src" : "https://placekitten.com/250/220" },
      { "name": "cat9", "src" : "https://placekitten.com/250/200" },
      { "name": "cat10", "src" : "https://placekitten.com/250/220" },
      { "name": "cat11", "src" : "https://placekitten.com/250/300" },
      { "name": "cat12", "src" : "https://placekitten.com/250/300" },
      { "name": "cat13", "src" : "https://placekitten.com/250/300" },
      { "name": "cat14", "src" : "https://placekitten.com/400/300" },
      { "name": "cat15", "src" : "https://placekitten.com/450/300" },
      { "name": "cat16", "src" : "https://placekitten.com/400/300" },
    ]
  };

  return JSON.stringify(request);
}

function GetGallery(url) {
  // const response = fetch(url)
  const result = JSON.parse(FakeFetch());
  return result;
}

export function Gallery(props) {
  const params = useParams();
  let gallery = GetGallery("placeholder");
  console.log(gallery);
  const images = gallery.images.map((image)=>
    <p key={image.name}><Image fluid src={image.src} alt={image.name}/></p>
  );
  return (
    <Container fluid>
      <h1> {params.galleryId} </h1>
      <div className="gallery">
        {images}
        </div>
      </Container>
  );
}

export default Gallery;
