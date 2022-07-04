import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export function GalleryImage() {
  const params = useParams();
  return (
    <div className="gallery-image">
      <h1> Image Name: {params.imageId}</h1>
      <h1> From Gallery: {params.galleryId}</h1>
      </div>
  );
}

export default GalleryImage;
