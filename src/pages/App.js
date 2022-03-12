/* import { React, useState } from "react";

import "../styles/home.scss";
import sampleData from "../Source/sampleData.js";
import Title from "../components/Title";
import MediaSource from "../components/MediaSource";

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="page-wrapper">
      <div className="project-list">
        {sampleData.map(({ title }, index) => (
          <Title
            key={index}
            title={title}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      <div className="project-media">
        {sampleData.map(({ mediaUrl }, index) => {
          const isActive = index === activeIndex;
          return <MediaSource url={mediaUrl} key={index} active={isActive} />;
        })}
      </div>
    </div>
  );
}

export default App;
 */

import React, { useState } from "react";
import Title from "../components/Title";
import sampleData from "../Source/sampleData";
import MediaSource from "../components/MediaSource";
import "../styles/home.scss";

function App() {
  const [activeIndex, setAcitveIndex] = useState(-1);

  return (
    <div className="page-wrapper">
      <div className="project-list">
        {sampleData.map(({ title }, index) => {
          return (
            <Title
              title={title}
              key={index}
              setActiveIndex={setAcitveIndex}
              index={index}
            />
          );
        })}
      </div>

      <div className="project-media">
        {sampleData.map(({ mediaUrl }, index) => {
          const isActive = index === activeIndex;
          return <MediaSource url={mediaUrl} key={index} active={isActive} />;
        })}
      </div>
    </div>
  );
}

export default App;
