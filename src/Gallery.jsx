import React from "react";
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

export function Gallery() {
  let params = useParams();
  return (
    <Container fluid>
      <h1> {params.galleryId} </h1>
      <div className="gallery">
        <p><Image fluid src="https://placekitten.com/200/300" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/200/300" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        <p><Image fluid src="https://placekitten.com/300/200" alt="test"/></p>
        </div>
      </Container>
  );
}

export default Gallery;
