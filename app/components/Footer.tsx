import React from "react";

export default function Footer() {
  const creator = "Khant Min";
  const today = new Date().getFullYear();
  return (
    <div style={{ width: "100%", backgroundColor: "#89DA00" }}>
      <h2
        style={{
          color: "#F7F2EE",
          padding: "0.5rem 1rem",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "semibold",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>&copy;{today} All Rights Reserved.</span>
        <span>
          Powered by{" "}
          <a href="https://github.com/khantmin" target="blank">
            {creator}
          </a>
        </span>
      </h2>
    </div>
  );
}
