import React from "react";

function ProfileList({ title, items }) {
  if (!items || items.length === 0) return null;

  const hasImages =
    typeof items[0] === "object" && items[0].img;

  return (
    <div className="profile-block">
      <h3>{title}</h3>

      {hasImages ? (
        <div className="favorites-grid">
          {items.map((item, index) => (
            <div key={index} className="favorite-card">
              <img
                src={item.img}
                alt={item.title}
                className="favorite-img"
              />

              <span>{item.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <ul style={{ margin: 0 }}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProfileList;
