import React from "react";
import "../styles/skeleton.scss";

export default function skeleton({ width, height }) {
  return <span className="skeleton-box" style={{ width, height }}></span>;
}
