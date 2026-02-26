import { render, screen, fireEvent } from "@testing-library/react";
import DefaultButton from "../components/atoms/defaultButton";

describe("Button Component", () => {
  test("renders button with text", () => {
    render(<DefaultButton>text</DefaultButton>);
    expect(screen.getByText("text")).toBeInTheDocument();
  });
  test("Calls onCLick when clicked", () => {
    //1. Create mock function
    const handleClick = jest.fn();

    //2. Render button
    render(<DefaultButton onClick={handleClick}>ClickTest</DefaultButton>);
  });
  test("Shows loading state", () => {});
  test("disables when disabled prop is true", () => {});
  test("renders with icon if there is icon", () => {});
});
