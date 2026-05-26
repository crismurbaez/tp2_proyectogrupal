import React from "react";

function ProfileList({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="profile-block">
      <h3>{title}</h3>
      <ul style={{ margin: 0 }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
