/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/home";


test("debe renderizar un titulo", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = screen.queryByText(/Selecciona una opción/i);
  expect(linkElement).toBeInTheDocument();
});


