import { Button } from "../TopOfHeader/TopOfHeader.styled";
import { HeaderBottom, MonthName } from "./BottomOfHeader.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const BottomOfHeader = () => {
  return (
    <HeaderBottom>
      <Button type="button" aria-label="arrow left">
        <IoIosArrowBack size={25} />
      </Button>
      <MonthName>March 2019</MonthName>
      <Button type="button" aria-label="arrow right">
        <IoIosArrowForward size={30} />
      </Button>
    </HeaderBottom>
  );
};
