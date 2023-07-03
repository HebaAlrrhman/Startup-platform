import ReactPlayer from "react-player";
import React from "react";
import "./Des.css";

function Des() {
  return (
    <>
      <div className="ContainerDes">
        <div className="Text">
          <h1>Learn more about Art </h1>
          <div className="Des">
            <p>
              Art videos provide a unique and captivating way to appreciate and
              explore the world of art. They offer a visual journey that allows
              artists to express their creativity and viewers to immerse
              themselves in the beauty and inspiration of the artistic process.
            </p>
          </div>
        </div>
        <div className="Playar">
          <ReactPlayer
            url="https://youtu.be/6tOgL86F3RU"
            
           
          />
        </div>
      </div>
    </>
  );
}

export default Des;
