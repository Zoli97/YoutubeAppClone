import React, { useState } from "react";
import styled from "styled-components";
import { menuData } from "../util/menuData";
import ButtonAccountCircle from "./ButtonAccountCircle";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ButtonAccountCircle
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("clicked");
        }}
        title="Click"
      />
      {isOpen && (
        <NavigationWrapper>
          {menuData.map((menu, index) => (
            <ButtonAccountCircle
              key={index}
              image={menu.image}
              title={menu.title}
            ></ButtonAccountCircle>
          ))}
        </NavigationWrapper>
      )}
    </div>
  );
}
const NavigationWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 20px 20px;
`;
export default Menu;
