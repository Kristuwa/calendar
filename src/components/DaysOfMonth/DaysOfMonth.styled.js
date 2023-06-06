import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NumberDay = styled(NavLink)`
padding: 5px;

font-family:inherit;
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => props.theme.color.primaryColor};
  background-color: "transparent";

	 &.active {
		color: #ffffff;
		background-color: ${(props) => props.theme.color.btnColor};
		border-radius: 20px;
	  ;
	 }
  }
`;
