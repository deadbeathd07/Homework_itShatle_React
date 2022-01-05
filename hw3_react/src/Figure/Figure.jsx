
import { useState } from "react";
import "./Figure.css";

export function Figure() {
  const [coordX, setCoordX] = useState(100);
  const [coordY, setCoordY] = useState(100);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState({
    left: getRandom(coordX, window.innerWidth),
    top: getRandom(coordY, window.innerHeight),
  });

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomCoordEnter(event) {
    const timer = setTimeout(()=> {
      const left = getRandom(coordX, event.screenX);
      const top = getRandom(coordY, event.screenY);
  
      setStyles({
        left: left,
        top: top,
      });
    }, 300);

    return () => clearTimeout(timer);
  }

  function dragStart(event) {
    setCoordX(event.screenX - event.target.getBoundingClientRect().left);
    setCoordY(event.screenY - event.target.getBoundingClientRect().top);
    setDragging(true);
  }

  function draggingElem(event) {
    if (dragging) {
      const left = event.screenX - coordX;
      const top = event.screenY - coordY;

      setStyles({
        left: left,
        top: top,
      });
    }
  }

  function dragEnd() {
    setDragging(false);
  }

  return (
    <div
      className="figure"
      style={styles}
      onMouseEnter={getRandomCoordEnter}
      onMouseDown={dragStart}
      onMouseMove={draggingElem}
      onMouseUp={dragEnd}
    ></div>
  );
}
