import { Container } from "../../App.styled";
import { renderRows, timeList } from "../../data";
import {
  TableBody,
  TableContainer,
  TimeListSection,
} from "./MainContainer.styled";

export const MainContainer = () => {
  return (
    <Container main="main">
      <TimeListSection>{timeList()}</TimeListSection>
      <TableContainer>
        <TableBody>{renderRows()}</TableBody>
      </TableContainer>
    </Container>
  );
};
