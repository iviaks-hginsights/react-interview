import React from "react";
import { render, screen } from "@testing-library/react";

import Table from ".";
import { data } from "../../data";

test("data should be equal", () => {
  const { container } = render(<Table data={data} />);

  expect(data.length).toBe(container.querySelectorAll("tbody tr").length);
});
