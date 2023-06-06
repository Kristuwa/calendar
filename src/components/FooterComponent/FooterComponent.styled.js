import styled from "styled-components";

export const Footer = styled.footer`
  padding: 30px 0;
  background-color: ${(props) => props.theme.color.bgColor};
  border-top: 1px solid #a1a1a1;
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.color.secondaryColor};
  font-size: 20px;
`;
