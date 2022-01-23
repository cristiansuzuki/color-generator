import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles.css";

export default function App() {
  const colors = [
    "#007A33",
    "#552583",
    "#FDB927",
    "#007AC1",
    "#9A0320",
    "#121212",
    "#00becc",
    "#c200b8",
    "#4d0924",
    "#2a3b1b",
    "#ffe115",
    "#EEE1C6",
    "#AA2D2A",
    "#939598",
    "#e59400",
  ];
  const [background, setBackground] = useState("#181818");
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrent(null);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [current]);

  return (
    <div className="App" style={{ background: background }}>
      {current !== null && <h1>Copiado {current}</h1>}
      <div className="container">
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div
              style={{
                background: color,
                filter: "brightness(85%)",
                boxShadow: color === background ? "0 0 10px #000" : "",
              }}
              className="box"
              onClick={() => setBackground(color)}
            />
            <CopyToClipboard text={`color: ${color};`}>
              <p
                style={{ color: color === background ? "#fff" : color }}
                onClick={() => setCurrent(color)}
              >
                {color}
              </p>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
}
