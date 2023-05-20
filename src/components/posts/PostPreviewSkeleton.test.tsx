import { render } from "@testing-library/react";
import PostPreviewSkeleton from "./PostPreviewSkeleton";

it("renders without crashing", () => {
    render(<PostPreviewSkeleton />);
});
