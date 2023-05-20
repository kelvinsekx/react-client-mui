import { render } from "@testing-library/react";
import PostList from "./PostList";
import { samplePost } from "./Post.test";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <PostList posts={[samplePost]} isLoading={false} />
        </BrowserRouter>,
    );
});

it("matches snapshot", () => {
    const { container } = render(
        <BrowserRouter>
            <PostList posts={[samplePost]} isLoading={false} />
        </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
});
