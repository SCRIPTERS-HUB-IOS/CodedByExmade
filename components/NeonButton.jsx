import React from "react";

export default function NeonButton({ children, onClick, className, style, ...props }) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: "rgba(51,0,0,0.6)",
        border: "2.5px solid #ff0000",
        color: "#ff0000",
        boxShadow:
          "0 0 12px #ff0000, 0 0 25px #ff0000, inset 0 0 12px #ff0000",
        borderRadius: "20px",
        fontWeight: "700",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        userSelect: "none",
        textShadow: "0 0 12px #ff1a1a",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(77,0,0,0.8)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(51,0,0,0.6)")}
      {...props}
    >
      {children}
    </button>
  );
}
