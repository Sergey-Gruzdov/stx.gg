"use client";

import React from "react";

export default function ColorCircle() {
  return (
    <div className="">
      <div
        className="rotateAndScale1-animation"
        style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          zIndex: -8,
          top: "calc(50% - 170px)",
          left: "calc(50% - 150px)",
          background:
            "conic-gradient(#FF78C4, #FF78C4, #9288F8, #8062D6, #8062D6, #322653)",
          borderRadius: "100%",
          filter: "blur(40px)",
          opacity: "0.8",
        }}
      />

      <div
        className="rotateAndScale2-animation"
        style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          zIndex: -9,
          top: "calc(50% - 170px)",
          left: "calc(50% - 150px)",
          background: "conic-gradient(#FFBDF7, #E1AEFF, #FF78C4)",
          opacity: 0.5,
          borderRadius: "100%",
          filter: "blur(32px)",
        }}
      />
    </div>
  );
}
