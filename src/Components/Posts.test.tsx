import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Posts from "../Components/Posts";

// Mock global fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, title: "Post One", body: "Body of post one" },
        { id: 2, title: "Post Two", body: "Body of post two" },
      ]),
  })
) as jest.Mock;

describe("Posts Component", () => {
  test("renders the component with title", async () => {
    render(<Posts />);
    expect(screen.getByText("Posts")).toHaveLength(5);
  });

  test("fetches and displays posts", async () => {
    render(<Posts />);

    await waitFor(() => {
      expect(screen.getByText("sunt")).toBeTruthy();
      expect(screen.getByText("sunt a")).toBeTruthy();
    });
  });

  test("filters posts based on search input", async () => {
    render(<Posts />);

    const searchInput = screen.getByPlaceholderText("Search posts...");
    fireEvent.change(searchInput, { target: { value: "Post One" } });

    await waitFor(() => {
      expect(screen.getByText("sunt")).toBeTruthy();
      expect(screen.getByText("sunt a")).toBeTruthy();
    });
  });
});
