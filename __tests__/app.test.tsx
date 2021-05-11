import React from "react";
import { render } from "@testing-library/react";

const Test = () => <div>teste</div>;

it("should renders without crashing", async () => {
  const component = render(<Test />);
  const text = await component.findByText(/teste/i);
  expect(text).toBeInTheDocument();
});
