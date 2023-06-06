import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./utils/theme";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { OneDayPage } from "./pages/OneDayPage";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [event, setEvent] = useState("");
  const [deleteButton, setDeleteButton] = useState(null);

  useEffect(() => {
    if (event) {
      console.log(event);
    }
  }, [event]);

  const addEvent = () => {
    const date = prompt(
      "http://calendar.com \n Enter event time: \n YYYY-MM-DD HH:mm:ss"
    );
    if (date) {
      setEvent(date);
    }
    return;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout addEvent={addEvent} deleteButton={deleteButton} />
          }
        >
          <Route
            index
            element={
              <OneDayPage
                setDeleteButton={setDeleteButton}
                deleteButton={deleteButton}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <OneDayPage
                setDeleteButton={setDeleteButton}
                deleteButton={deleteButton}
              />
            }
          />
          <Route
            path="*"
            element={
              <OneDayPage
                setDeleteButton={setDeleteButton}
                deleteButton={deleteButton}
              />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
