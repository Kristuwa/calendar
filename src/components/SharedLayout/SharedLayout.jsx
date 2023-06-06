import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "../Header/Header";
import { FooterComponent } from "../FooterComponent/FooterComponent";

export const SharedLayout = ({ addEvent, deleteButton }) => {
  return (
    <>
      <Header addEvent={addEvent} />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <FooterComponent deleteButton={deleteButton} />
    </>
  );
};
