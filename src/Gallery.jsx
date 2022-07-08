import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import testJson from './test.json';

function GetGallery(galleryId) {
  const data = testJson[galleryId];
  let result = undefined;
  if (data) {
    result = data.map((image)=>
      <p key={image.name}><Image fluid src={image.src} alt={image.name}/></p>
    ); 
  } 
  return result;
}

export function Gallery() {
  const params = useParams();

  // get gallery json
  let gallery = GetGallery(params.galleryId);

  return (
    <Container fluid>
      <h1> {params.galleryId} </h1>
      {(gallery === undefined) && <h3> {"Sorry, this gallery doesn't exist"} </h3> }
      <div className="gallery">
        {gallery}
        </div>
      </Container>
  );
}

export default Gallery;
