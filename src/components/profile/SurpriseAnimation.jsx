import React from "react";

function SurpriseAnimation({ animPhase, targetRect, surpriseImg }) {
  if (animPhase === "IDLE") return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999999,
        backgroundColor:
          animPhase === "SCARE" ? "rgba(0,0,0,0.95)" : "transparent",
        transition: "background-color 0.8s ease",
        pointerEvents: "none",
      }}
    >
      <img
        src={surpriseImg}
        alt="Flying surprise"
        style={{
          position: "absolute",
          objectFit: "contain",
          ...(animPhase === "SCARE"
            ? {
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                transition: "none",
              }
            : {
                top: targetRect?.top,
                left: targetRect?.left,
                width: targetRect?.width,
                height: targetRect?.height,
                transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
              }),
        }}
      />
    </div>
  );
}

export default SurpriseAnimation;
