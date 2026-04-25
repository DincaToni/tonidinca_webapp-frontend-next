import { render, screen, fireEvent } from "@testing-library/react";
import DefaultButton from "../components/atoms/defaultButton";
import { options } from "joi";

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

    //3. Finding the mf button
    let button = screen.getByRole('button',{name:'ClickTest' })

    //4. Fire that mf =)) hehe 
    fireEvent.click(button)

    //5. High expectances
      expect(handleClick).toHaveBeenCalled;
      expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("Shows loading state", () => {});
  test("disables when disabled prop is true", () => {});
  test("renders with icon if there is icon", () => {});
});
