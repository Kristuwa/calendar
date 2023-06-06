import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./utils/theme";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { OneDayPage } from "./pages/OneDayPage";
import { useState } from "react";

function App() {
  const [nowDay, setNowDay] = useState(29);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout day={nowDay} />}>
          <Route index element={<OneDayPage />} />
          <Route path="/:id" element={<OneDayPage />} />
          <Route path="*" element={<OneDayPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
