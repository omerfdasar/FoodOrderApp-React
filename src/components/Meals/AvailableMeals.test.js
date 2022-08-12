import { render, screen } from "@testing-library/react";
import AvailableMeals from "./AvailableMeals";

describe("Async Test", () => {
  test("should renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        m2: {
          name: "name";
          description: "description";
          price: 30;
        }
      },
    });
    render(<AvailableMeals />);

    const listItemElements = await screen.findAllByRole("listitem", {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});
