import { Container } from "../../App.styled";
import {
  DeleteButton,
  Footer,
  FooterContent,
  FooterText,
} from "./FooterComponent.styled";

export const FooterComponent = ({ deleteButton }) => {
  return (
    <Footer>
      <Container>
        <FooterContent>
          <FooterText>Today</FooterText>
          {deleteButton && deleteButton.state && (
            <DeleteButton type="button">Delete</DeleteButton>
          )}
        </FooterContent>
      </Container>
    </Footer>
  );
};
