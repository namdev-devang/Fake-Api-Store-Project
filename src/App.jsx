import React from "react";
import { Route, Routes } from "react-router-dom";
import CardData from "./Comp/CardData";
import CategoriesData from "./Comp/CategoriesData";
import CategoryData from "./Comp/CategoryData";
import Navba from "./Comp/Navbar";
import Single from "./Comp/Single";

function App() {

  return (
    <>
      <Navba />
      <Routes>
        <Route path="/" Component={CardData} />
        <Route path="/product/:id" Component={Single} />
        <Route path="/product/category" Component={CategoriesData} />
        <Route path="/product/category/:name" Component={CategoryData} />
      </Routes>
    </>
  );
}

export default App;
