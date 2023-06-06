import styled from "styled-components";

export const Footer = styled.footer`
  padding: 30px 0;
  background-color: ${(props) => props.theme.color.bgColor};
  border-top: 1px solid #a1a1a1;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.color.secondaryColor};
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  font-family: inherit;
  font-size: 20px;

  color: ${(props) => props.theme.color.btnColor};

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.accentColor};
  }
`;
