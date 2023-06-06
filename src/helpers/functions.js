import { Td, TimeItem } from "../components/MainContainer/MainContainer.styled";

const handleClick = (indexRow, indexColumn, setDeleteButton) => {
  setDeleteButton((prevState) => {
    const findTd = prevState?.id === `${indexRow}${indexColumn}`;
    return findTd
      ? { ...prevState, state: !prevState.state }
      : { id: `${indexRow}${indexColumn}`, state: true };
  });
};

export const renderRows = (setDeleteButton, deleteButton) => {
  const rows = [];
  for (let i = 0; i < 25; i += 1) {
    rows.push(
      <tr key={i}>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}1`}
          id={`${i}1`}
          onClick={() => handleClick(i, 1, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}2`}
          id={`${i}2`}
          onClick={() => handleClick(i, 2, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}3`}
          id={`${i}3`}
          onClick={() => handleClick(i, 3, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}4`}
          id={`${i}4`}
          onClick={() => handleClick(i, 4, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}5`}
          id={`${i}5`}
          onClick={() => handleClick(i, 5, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}6`}
          id={`${i}6`}
          onClick={() => handleClick(i, 6, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}7`}
          id={`${i}7`}
          onClick={() => handleClick(i, 7, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}8`}
          id={`${i}8`}
          onClick={() => handleClick(i, 8, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}9`}
          id={`${i}9`}
          onClick={() => handleClick(i, 9, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}10`}
          id={`${i}10`}
          onClick={() => handleClick(i, 10, setDeleteButton)}
        ></Td>
        <Td
          active={deleteButton?.state && deleteButton?.id === `${i}11`}
          id={`${i}11`}
          onClick={() => handleClick(i, 11, setDeleteButton)}
        ></Td>
      </tr>
    );
  }
  return rows;
};

export const timeList = () => {
  const timeArr = [];
  for (let i = 0; i < 24; i += 1) {
    if (i < 10) {
      timeArr.push(
        <TimeItem key={`0${i}:00`}>
          <p>0{i}:00</p>
        </TimeItem>
      );
    } else
      timeArr.push(
        <TimeItem key={`${i}:00`}>
          <p>{i}:00</p>
        </TimeItem>
      );
  }
  return timeArr;
};
