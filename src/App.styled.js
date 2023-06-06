import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  display: ${(props) => (props.main === "main" ? "flex" : "block")};

  @media screen and (min-width: 740px) {
    width: 740px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const TimeListSection = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const TimeItem = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableContainer = styled.table`
  width: 100%;
  height: 1000px;
  max-width: 650px;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: auto;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const TableBody = styled.tbody`
  white-space: nowrap;
`;

export const Tr = styled.tr`
  &:last-child {
    border-bottom: none;
  }
`;

export const Td = styled.td`
  height: 40px;
  width: calc(100% / 12);
  height: 40px;
  border-right: 1px solid #a1a1a1;
  border-bottom: 1px solid #a1a1a1;
  &:last-child {
    border-right: none;
  }
`;

export const Footer = styled.footer`
  padding: 30px 0;
  background-color: ${(props) => props.theme.color.bgColor};
  border-top: 1px solid #a1a1a1;
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.color.secondaryColor};
  font-size: 20px;
`;
