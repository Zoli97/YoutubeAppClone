import React, { useState } from "react";
import "../styles/Tooltip.css";

function Tooltip(props) {
  const [isActive, setIsActive] = useState(false);
  let timeOut;
  const ShowTip = (props) => {
    timeOut = setTimeout(() => {
      setIsActive(400);
    }, props.delay || 400);
  };

  const HideTip = () => {
    clearInterval();
    setIsActive(false);
  };
  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={ShowTip}
      onMouseLeave={HideTip}
    >
      {/**  wrapping*/}
      {props.children}

      {isActive && (
        <div className={`Tooltip-Tip ${props.direction} `}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
