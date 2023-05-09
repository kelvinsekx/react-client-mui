import { Divider, IconButton, ListItem, ListItemText } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import sanitizeHtml from 'sanitize-html';

import "./Correction.css";

export interface CorrectionInterface {
    username: string;
    correction_id?: string;
    perfect_id?: string;
    correction: string;
    note: string;
    pretty_html: string;
    sentence_order: number;
    status: string;
}

export interface CorrectionPropInterface {
    data: CorrectionInterface;
}

interface SanitizeProps {
    html: string;
    options?: sanitizeHtml.IOptions;
}

const defaultOptions: sanitizeHtml.IOptions = {
    allowedTags: ["span", "del", "ins"]
};

const sanitize = ({ html, options }: SanitizeProps) => ({
    __html: sanitizeHtml(
        html,
        { ...defaultOptions, ...options }
    )
});

const SanitizeHTML = ({ html, options }: SanitizeProps) => (
    <div dangerouslySetInnerHTML={sanitize({ html, options })}/>
);

/**
 * Renders an individual correction
 *
 * Props:
 * - data
 *
 * {UserCorrections} -> Correction
 */
const Correction = ({ data }: CorrectionPropInterface) => {

    const renderCorrection = data.status === "perfect" ? "this sentence is marked as perfect " : <ListItemText
        primary={<SanitizeHTML html={data.pretty_html}/>}
        secondary={data.note}/>;

    const correctionId = data.correction_id ? data.correction_id : data.perfect_id;

    return (
        <>
            <ListItem
                key={correctionId}
                secondaryAction={
                    <IconButton edge="end" aria-label="reply">
                        <ReplyIcon/>
                    </IconButton>
                }
                sx={{
                    paddingTop: "1rem",
                    paddingBottom: "1rem"
                }}
            >
                {renderCorrection}
            </ListItem>
            <Divider />
        </>
    );
};

export default Correction;