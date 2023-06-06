import { MainContainer } from "../components/MainContainer/MainContainer";

export const OneDayPage = ({ day }) => {
  return (
    <>
      <main>
        <MainContainer day={day} />
      </main>
    </>
  );
};
