import { useEffect } from "react";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";


function Lightbox({
  items,
  selectedIndex,
  onClose,
  onNext,
  onPrev
}) {

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