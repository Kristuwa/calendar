import { MainContainer } from "../components/MainContainer/MainContainer";

export const OneDayPage = ({ setDeleteButton, deleteButton }) => {
  return (
    <main>
      <MainContainer
        setDeleteButton={setDeleteButton}
        deleteButton={deleteButton}
      />
    </main>
  );
};
