import { fireEvent, render, screen } from "@testing-library/react";
import PostList from "../components/Postlist";
import renderer from "react-test-renderer";

describe("PostList", () => {
  const validProps = {
    posts: [
      {
        id: 1,
        title: "test title",
        body: "test body",
        tags: ["tag 1", "tag 2", "tag 3"],
        author: "test author",
        date: "test date",
        isPublished: true,
      },
      {
        id: 2,
        title: "test title2",
        body: "test body2",
        tags: ["tag 1", "tag 2", "tag 3"],
        author: "test author2",
        date: "test date2",
        isPublished: false,
      },
    ],
  };
  test("check snapshot matches", () => {
    const rendered = renderer.create(<PostList posts={validProps.posts} />);

    expect(rendered).toMatchSnapshot();
  });

  test("Assert last upvoted post is displayed", () => {
    render(<PostList posts={validProps.posts} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);

    const lastUpvoted = screen.queryByText("Last upvoted post");
    expect(lastUpvoted).toBeNull();

    fireEvent.click(buttons[0]);
    expect(
      screen.getByText("Last upvoted post: test title")
    ).toBeInTheDocument();
  });
});
