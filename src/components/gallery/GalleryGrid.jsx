function GalleryGrid({ items, onSelect }) {

  return (

    <div className="gallery-grid">

      {items.map((item, index) => (

        <div
          key={item.id}
          className="gallery-item"
          onClick={() => onSelect(index)}
        >

          <img
            src={item.image}
            alt={item.title}
          />

        </div>

      ))}

    </div>
  );
}

export default GalleryGrid;