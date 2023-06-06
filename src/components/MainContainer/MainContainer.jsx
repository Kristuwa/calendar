import { Container } from "../../App.styled";
import { renderRows, timeList } from "../../helpers/functions";
import {
  TableBody,
  TableContainer,
  TimeListSection,
} from "./MainContainer.styled";

export const MainContainer = ({ setDeleteButton }) => {
  return (
    <Container main="main">
      <TimeListSection>{timeList()}</TimeListSection>
      <TableContainer>
        <TableBody>{renderRows(setDeleteButton)}</TableBody>
      </TableContainer>
    </Container>
  );
};
