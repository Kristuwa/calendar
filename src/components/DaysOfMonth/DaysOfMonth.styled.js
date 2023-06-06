import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NumberDay = styled(NavLink)`
padding: 5px;
border-radius: ${(props) => (props.active === "active" ? "20px" : "none")};
font-family:inherit;
  font-weight: 500;
  font-size: 20px;
  color: ${(props) =>
    props.active === "active" ? "#ffffff" : props.theme.color.primaryColor};
  background-color: ${(props) =>
    props.active === "active" ? props.theme.color.btnColor : "transparent"};
  }
`;
