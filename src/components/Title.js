import React from "react";

export default ({ title, setActiveIndex, index }) => {
  return (
    <div
      className="project-item"
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(-1)}
    >
      <h2 className="project-title">
        <span>{title}</span>
      </h2>
    </div>
  );
};
