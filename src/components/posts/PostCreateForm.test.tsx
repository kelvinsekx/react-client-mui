import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostCreateForm from "./PostCreateForm";
import { TestAuthProvider } from "../../testUtils";

// TODO: woefully under-tested

it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <TestAuthProvider>
                <PostCreateForm />
            </TestAuthProvider>
        </BrowserRouter>,
    );
});

it("matches snapshot", () => {
    const { container } = render(
        <BrowserRouter>
            <TestAuthProvider>
                <PostCreateForm />
            </TestAuthProvider>
        </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
});
