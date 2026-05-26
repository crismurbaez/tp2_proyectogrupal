import React from "react";

function SocialMedia({ socialMedia }) {
  if (!socialMedia || socialMedia.length === 0) return null;

  return (
    <div className="social-media-container">
      {socialMedia.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          {social.platform}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
