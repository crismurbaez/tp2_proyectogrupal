import { useEffect, useState } from "react";
import { FaXmark, FaChevronLeft, FaChevronRight, FaMagnifyingGlassPlus, FaMagnifyingGlassMinus } from "react-icons/fa6";


function Lightbox({
  items,
  selectedIndex,
  onClose,
  onNext,
  onPrev
}) {

  const [zoom, setZoom] = useState(1);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom((prev) => Math.max(prev - 0.5, 1));
  };

  useEffect(() => {
    setZoom(1);
  }, [selectedIndex]);

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "Escape")
        onClose();

      if (e.key === "ArrowRight")
        onNext();

      if (e.key === "ArrowLeft")
        onPrev();
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, [onClose, onNext, onPrev]);

  const item =
    items[selectedIndex];

  return (

    <div
      className="lightbox"
      onClick={onClose}
    >

      <div className="lightbox-zoom-controls">
        <button className="lightbox-zoom-btn" onClick={handleZoomOut}>
          <FaMagnifyingGlassMinus />
        </button>
        <button className="lightbox-zoom-btn" onClick={handleZoomIn}>
          <FaMagnifyingGlassPlus />
        </button>
      </div>

      <button
        className="lightbox-close"
      >
        <FaXmark />
      </button>

      <button
        className="lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <FaChevronLeft />
      </button>

      <img
        src={item.image}
        alt={item.title}
        className="lightbox-image"
        style={{ transform: `scale(${zoom})` }}
        onClick={(e) =>
          e.stopPropagation()
        }
      />

      <button
        className="lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <FaChevronRight />
      </button>

    </div>
  );
}

export default Lightbox;