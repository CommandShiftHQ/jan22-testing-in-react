import { fireEvent, render, screen } from "@testing-library/react";
import Post from "../components/Post";
import renderer from "react-test-renderer";

describe("Post", () => {
  const validProps = {
    postData: {
      author: "test author",
      body: "test body",
      date: "test date",
      isPublished: true,
      tags: ["test tag1", "test tag2", "test tag3"],
      title: "test title",
    },
    handleUpvote: jest.fn(),
  };

  test("check snapshot matches", () => {
    const rendered = renderer.create(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("checks author is correct value", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    expect(screen.getByText("Author: test author")).toBeInTheDocument();
  });

  test("Renders single button with correct text", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );
    const buttons = screen.getAllByRole("button");

    expect(buttons[0]).toBeInTheDocument();
    expect(buttons).toHaveLength(1);
  });

  test("Renders correct number of tags", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );
    const listElements = screen.getAllByRole("listitem");

    expect(listElements).toHaveLength(3);
  });

  test("Upvote button calls passed down function", () => {
    render(
      <Post
        postData={validProps.postData}
        handleUpvote={validProps.handleUpvote}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(validProps.handleUpvote).toHaveBeenCalled();
    expect(validProps.handleUpvote).toHaveBeenCalledTimes(1);
  });
});
