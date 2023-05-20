import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Post from "./Post";

export const samplePost = {
    id: 99999,
    content: {
        title: "The Catcher in the Rye",
        text: "Jài commencé lire la histoire « The Catcher in the Rye ». Le livre es d'un garçon qui échoue a l’École. Il déambule ensuite en New York. Il fait la connaissance qu'un homme qui force le garçon de rencontrer un femme a un hôtel. Elle est assise sur ses genoux et le garçon dit : Je te donne les cinq dollar promis, mais parlons juste. La femme va, et l'homme revient et demande autre cinq dollars. Le garçon est menacé. Je n'ai pas lu plus loin.",
        native_text: "",
    },
    language: {
        code: "fr",
        en_name: "French",
    },
    meta: {
        slug: "the-catcher-in-the-rye",
        tags: [],
        permission: "public",
        created: "2023-04-28T17:51:06.205743Z",
        modified: "2023-04-28T18:40:20.153441Z",
    },
    gender_of_narration: "F",
    prompt: null,
    language_level: "A1",
    user: {
        username: "testUser",
        is_premium: false,
    },
    total_correctors: 1,
};

it("renders without crashing", () => {
    render(<Post post={samplePost} />);
});

it("matches snapshot", () => {
    const { container } = render(<Post post={samplePost} />);
    expect(container).toMatchSnapshot();
});
