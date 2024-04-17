import React from "react";

function DropDownItem({ icon, text }) {
  return (
    <div>
      <li style={{ display: "flex" }}>
        <i>{icon}</i>
        <a href="" style={{ paddingLeft: "1em" }}>
          {text}
        </a>
      </li>
    </div>
  );
}

export default DropDownItem;
