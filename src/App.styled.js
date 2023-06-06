import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  display: ${(props) => (props.main === "main" ? "flex" : "block")};

  @media screen and (min-width: 741px) {
    width: 740px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;
