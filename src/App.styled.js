import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  display: ${(props) => (props.main === "main" ? "flex" : "block")};

  @media screen and (min-width: 740px) {
    width: 740px;
    padding: 0 25px;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const CalendarName = styled.p`
  font-weight: 600;
  font-size: 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.color.btnColor};

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.accentColor};
  }
`;

export const DaysList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 15px;
`;

export const TimeListSection = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TimeItem = styled.li`
  width: 40px;
  height: 40px;
`;

export const TableSection = styled.div`
  width: 100%;
  padding: 10px 5px 10px;
`;

export const TableContainer = styled.table`
  width: 100%;
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
  height: 40px;
  border: 1px solid #a1a1a1;
`;

export const Td = styled.td`
  width: calc(100% / 12);
  height: 40px;
  border: 1px solid #a1a1a1;
`;
