import { useEffect, useState } from "react";
import galleryData from "../data/galleryData";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="gallery-page">
      <h1>Galería</h1>

      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox">
          <button onClick={() => setSelectedIndex(null)}>
            X
          </button>

          <button onClick={prevImage}>
            ←
          </button>

          <img
            src={galleryData[selectedIndex].image}
            alt={galleryData[selectedIndex].title}
          />

          <button onClick={nextImage}>
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;