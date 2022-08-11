import { render, screen } from "@testing-library/react";
import AvailableMeals from "./AvailableMeals";

describe("Async Test", () => {
  test("should renders post if request succeeds", async () => {
    render(<AvailableMeals />);
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
