import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Photo from "./features/Photo";

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ... </div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/photos" />} />
            <Route path="/photos/*" element={<Photo />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
