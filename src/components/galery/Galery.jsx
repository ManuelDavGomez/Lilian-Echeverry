"use client";

import React, { useState } from "react";
import "./galery.css";
import Image from "next/image";

const Galery = () => {
  const initialImages = [
    "/image/galeria1.avif",
    "/image/galeria3.avif",
    "/image/galeria4.avif",
    "/image/galeria5.avif",
    "/image/galeria6.avif",
    "/image/about_img.avif",
    "/image/galeria7.avif",
    "/image/galeria8.avif",
    "/image/galeria9.avif", 
    "/image/galeria10.avif",
    "/image/galeria11.avif",
    "/image/galeria12.avif",
    "/image/galeria13.avif",
  ];

  const [images, setImages] = useState(initialImages.slice(0, 4)); // Initial images to display

  const loadMoreImages = () => {
    const remainingImages = initialImages.slice(images.length);
    const newImages = images.concat(remainingImages.slice(0, 4)); // Load 3 images at a time
    setImages(newImages);
  };
  const areAllImagesLoaded = images.length === initialImages.length;

  return (
    <section className="container_general">
      <h2>Mi Galeria de Fotos</h2>
      <section className="galeria_container_general">
        <section className="galeria_container">
          {images.map((imageSrc, index) => (
            <article key={index} className="galeria_item">
              <Image
                src={imageSrc}
                width={210}
                height={300}
                alt={`Image ${index}`}
                loading="eager"
              />
            </article>
          ))}
        </section>
        {!areAllImagesLoaded && (
          <button className="btn_galery" onClick={loadMoreImages}>
            Cargar más imágenes
          </button>
        )}
      </section>
    </section>
  );
};

export default Galery;
