import React from "react";
import { createPortal } from "react-dom";
import Lanyard from "./Lanyard/Lanyard";

const portalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 9999,
  pointerEvents: "none",
};

const canvasWrapperStyle = {
  width: "100vw",
  height: "100vh",
  pointerEvents: "auto", // agar drag tetap bisa
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
};

export default function LanyardPortal() {
  return createPortal(
    <div style={portalStyle}>
      <div style={canvasWrapperStyle}>
        <Lanyard position={[2, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>,
    document.body
  );
}
