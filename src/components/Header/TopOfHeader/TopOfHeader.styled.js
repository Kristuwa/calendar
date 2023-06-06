import styled from "styled-components";

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const CalendarName = styled.p`
  font-weight: 400;
  font-size: 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.color.btnColor};

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.accentColor};
  }
`;
