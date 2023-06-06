import styled from "styled-components";

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

  background-color: ${(props) =>
    props.active ? props.theme.color.accentColor : "transparent"};

  &:last-child {
    border-right: none;
  }
`;
