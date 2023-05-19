import { CardContent, Typography } from "@mui/material";

interface ArticleInterface {
    title: string;
    text: string;
    nativeText?: string;
}

const Article = ({ title, text, nativeText }: ArticleInterface) => {
    return (
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography
                mb={3}
                style={{ display: "inline-block", whiteSpace: "break-spaces" }}
            >
                {text}
            </Typography>
            <Typography
                color="secondary"
                style={{ display: "inline-block", whiteSpace: "break-spaces" }}
            >
                {nativeText}
            </Typography>
        </CardContent>
    );
};

export default Article;
