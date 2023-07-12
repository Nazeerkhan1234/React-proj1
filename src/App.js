import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import Lauout from "./pages/Lauout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lauout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}
