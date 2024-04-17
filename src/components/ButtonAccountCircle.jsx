import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function ButtonAccountCircle(props) {
  return (
    <Button>
      <Image>{props.image}</Image>
      <Title>{props.title}</Title>
    </Button>
  );
}

const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;
const Title = styled.p`
  align-items: center;
  color: #ffffff;
  text-align: center;
  margin: auto;
  margin-left: 10px;
`;
const Image = styled(AccountCircleIcon)`
  margin: auto;
  height: 24px;
  width: 24px;
  object-fit: cover;
`;
export default ButtonAccountCircle;
