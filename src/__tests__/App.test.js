import { render, screen } from "@testing-library/react";
import App from "../components/App";
import renderer from "react-test-renderer";

test("renders learn react link", () => {
  render(<App />);
  const titleElement = screen.getByText("Testing in React");
  expect(titleElement).toBeInTheDocument();
});

test("check the component renders correctly", () => {
  const rendered = renderer.create(<App />);

  expect(rendered).toMatchSnapshot();
});
