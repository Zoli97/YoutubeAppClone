import React from "react";
import "../styles/SidebarItem.css";

function SidebarItem({ selected, Icon, title }) {
  return (
    <div className={`sidebar__item ${selected && "selected"}`}>
      <Icon className="sidebarItem__icon " />
      <h2 className="sidebarItem__title">{title}</h2>
    </div>
  );
}

export default SidebarItem;
