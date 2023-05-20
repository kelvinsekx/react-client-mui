import { render } from "@testing-library/react";
import { samplePost } from "./Post.test";
import { BrowserRouter } from "react-router-dom";
import PostPreview from "./PostPreview";

it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <PostPreview post={samplePost} />
        </BrowserRouter>,
    );
});

it("matches snapshot", () => {
    const { container } = render(
        <BrowserRouter>
            <PostPreview post={samplePost} />
        </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
});
