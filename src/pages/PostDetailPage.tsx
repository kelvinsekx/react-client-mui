import LangCorrectAPI from '../api';
import { useParams } from 'react-router-dom';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';

import Post from '../components/posts/Post';
import { Button, ButtonGroup, Stack, Tooltip, Typography } from '@mui/material';
import { mockCorrections } from '../_mockdata/correctionsMock';
import UserCorrections from '../components/corrections/UserCorrections';
import { useQuery } from '@tanstack/react-query';

const PostDetailPage = () => {
    const { slug } = useParams();

    async function getPost() {
        return await LangCorrectAPI.getPost(slug);
    }

    const { isLoading, isError, data } = useQuery({
        queryKey: ["posts", slug],
        queryFn: getPost
    });

    if (isLoading) return <h1>Loading....</h1>;
    if (isError) return <h1>Error....</h1>;

    return (
        <>
            <Post post={data} />

            <Stack direction="row" justifyContent="end" alignItems="center" gap={1} my={3}>
                <Typography>Corrections</Typography>
                <ButtonGroup variant="outlined">
                    <Tooltip title="Display corrections grouped by user">
                        <Button>
                            <PersonIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Display corrections grouped by sentence">
                        <Button>
                            <LayersIcon />
                        </Button>
                    </Tooltip>
                </ButtonGroup>
            </Stack>

            <Stack gap={5}>
                {mockCorrections.results.map(correction => (
                    <UserCorrections
                        key={correction.username}
                        username={correction.username}
                        corrections={correction.corrections}
                        comments={correction.comments} />
                ))}
            </Stack>
        </>
    );
};

export default PostDetailPage;