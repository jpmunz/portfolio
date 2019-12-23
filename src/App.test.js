import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("Basic rendering", () => {
  expect(() => render(<App />)).not.toThrow();
});
