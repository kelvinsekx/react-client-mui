import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostForm from "./PostForm";
import { TestAuthProvider } from "../../testUtils";

// TODO: woefully under-tested

const handleSubmit = () => {};

it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <TestAuthProvider>
                <PostForm post={undefined} onSubmit={handleSubmit} />
            </TestAuthProvider>
        </BrowserRouter>,
    );
});

it("matches snapshot", () => {
    const { container } = render(
        <BrowserRouter>
            <TestAuthProvider>
                <PostForm post={undefined} onSubmit={handleSubmit} />
            </TestAuthProvider>
        </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
});
