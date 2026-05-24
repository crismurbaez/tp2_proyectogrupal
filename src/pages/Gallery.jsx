import { useState } from "react";

import galleryData from "../data/galleryData";

import GalleryGrid from "../components/gallery/GalleryGrid";
import Lightbox from "../components/gallery/Lightbox";

function Gallery() {

  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {

    setSelectedIndex((prev) =>
      prev === galleryData.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {

    setSelectedIndex((prev) =>
      prev === 0
        ? galleryData.length - 1
        : prev - 1
    );
  };

  return (

    <section className="gallery-page">

      <h1>
        Galería
      </h1>

      <GalleryGrid
        items={galleryData}
        onSelect={openLightbox}
      />

      {selectedIndex !== null && (

        <Lightbox
          items={galleryData}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />

      )}

    </section>
  );
}

export default Gallery;