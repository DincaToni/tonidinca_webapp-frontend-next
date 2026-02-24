import { render, screen, fireEvent } from "@testing-library/react";
import DefaultButton from "../components/atoms/defaultButton";

describe("Button Component", () => {
  test("renders button with text", () => {
    render(<DefaultButton>text</DefaultButton>);
    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
