import Article from "./Article";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { it, expect } from "vitest";

it("renders without crashing", () => {
    render(<Article title="test" text="text" nativeText="native" />);
});

it("matches snapshot", () => {
    const { container } = render(
        <Article title="test" text="text" nativeText="native" />,
    );
    expect(container).toMatchSnapshot();
});
