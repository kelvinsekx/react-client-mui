import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Box, Button, Typography } from "@mui/material";
import CorrectionCard from "../components/corrections/CorrectionCard";
import { ICorrection } from "../components/corrections/Correction";

interface IFullCorrection extends ICorrection {
    is_published: string;
}

interface IRow {
    postrow_id: number;
    original_sentence: string;
    correction: IFullCorrection;
    is_perfect_count?: number;
}

export interface ICorrectionDraft {
    draft_type: "correction" | "perfect";
    post_row_id: number;
    correction?: string;
    note?: string;
}

const MakeCorrectionPage = () => {
    const { slug } = useParams();
    const axiosPrivate = useAxiosPrivate();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const query = useQuery(["makeCorrections", slug], () =>
        axiosPrivate
            .get(`/journals/${slug}/make-correction`)
            .then((res) => res.data),
    );

    const mutation = useMutation({
        mutationFn: async (data: ICorrectionDraft) => {
            const resp = await axiosPrivate.post("drafts/", data);
            return resp?.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["makeCorrections", slug],
            });
        },
        onError: () => {
            // TODO:
        },
    });

    const handleSubmit = async (evt: React.SyntheticEvent) => {
        evt.preventDefault();

        try {
            await axiosPrivate.post(`/journals/${slug}/make-correction/`);
            navigate(`/journals/${slug}`);
        } catch (err) { /* empty */ }
    };

    if (query.isLoading) return <p>Loading...</p>;

    return (
        <>
            <Typography mb={3}>Make a correction</Typography>

            {query.data.map((row: IRow) => (
                <Box mb={2} key={row.postrow_id}>
                    <CorrectionCard
                        prid={row.postrow_id}
                        original_sentence={row.original_sentence}
                        isCorrected={row.correction !== null}
                        correction={row?.correction}
                        onDraftSave={mutation.mutate}
                        isPublished={row.correction?.is_published}
                    />
                </Box>
            ))}

            <Box
                component="form"
                display="flex"
                justifyContent="end"
                method="post"
                onSubmit={handleSubmit}
            >
                <Button>Discard all drafts</Button>
                <Button type="submit">Publish</Button>
            </Box>
        </>
    );
};

export default MakeCorrectionPage;
