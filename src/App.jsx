import React from "react";
import { Waiter } from "./components/waiter.jsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Kitchen } from "./components/kitchen";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
  );
};

export default App;
