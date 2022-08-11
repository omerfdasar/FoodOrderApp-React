import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header Component", () => {
  test("renders meals as a text", () => {
    render(<Header />);
    const element = screen.getByText("Meals");
    expect(element).toBeInTheDocument();
  });

//   test("renders whether modal is open", () => {
//     render(<Header />);

//     const buttonElement = screen.getByText("Your Cart");
//     userEvent.click(buttonElement);
//     // console.log(buttonElement);

//     const totalAmount = screen.getByText("0", { exact: false });
//     console.log(totalAmount);
//     expect(totalAmount).toBeInTheDocument();
//   });
});
