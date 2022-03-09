import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEdit from "./pages/AddEdit";
import MainPage from "./pages/Main";

// Photo.propTypes = {};

function Photo(props) {
  return (
    <Routes>
      <Route path="/" exact element={<MainPage />} />

      <Route path="add" element={<AddEdit />} />
      <Route path="photoId" element={<AddEdit />} />

      <Route element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
