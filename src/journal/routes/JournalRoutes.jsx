import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "../Pages/JournalPage";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage></JournalPage>}></Route>
      <Route path="/*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};
