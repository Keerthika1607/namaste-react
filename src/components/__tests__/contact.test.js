import React from "react"; 
const { render, screen } = require("@testing-library/react")
const { default: Contact } = require("../Contact")
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
   render(<Contact />);

   const heading = screen.getByRole("heading");

   expect(heading).toBeInTheDocument();
});