export const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
export const daysNumber = [25, 26, 27, 28, 29, 30, 31];
export const renderRows = () => {
  const rows = [];
  for (let i = 0; i < 25; i += 1) {
    rows.push(
      <tr key={i}>
        <Td id={`${i}1`}></Td>
        <Td id={`${i}2`}></Td>
        <Td id={`${i}3`}></Td>
        <Td id={`${i}4`}></Td>
        <Td id={`${i}5`}></Td>
        <Td id={`${i}6`}></Td>
        <Td id={`${i}7`}></Td>
        <Td id={`${i}8`}></Td>
        <Td id={`${i}9`}></Td>
        <Td id={`${i}10`}></Td>
        <Td id={`${i}11`}></Td>
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
