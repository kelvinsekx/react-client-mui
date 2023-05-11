import React, { useEffect, useState } from 'react';
import LangCorrectAPI from '../api';
import { useParams } from 'react-router-dom';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';

import { PostInterface } from "./PostPage";
import Post from '../components/posts/Post';
import { Button, ButtonGroup, Stack, Tooltip, Typography } from '@mui/material';
import { mockCorrections } from '../_mockdata/correctionsMock';
import UserCorrections from '../components/corrections/UserCorrections';

const PostDetailPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState<PostInterface | null>(null);

    useEffect(() => {
        async function fetchPost() {
            const resp = await LangCorrectAPI.getPost(slug);
            const article = resp[0];
            setPost(article);
        }

        fetchPost();
    }, []);

    if (!post) return <p>Loading....</p>;

    return (
        <>
            <Post post={post}/>

            <Stack direction="row" justifyContent="end" alignItems="center" gap={1} my={3}>
                <Typography>Corrections</Typography>
                <ButtonGroup variant="outlined">
                    <Tooltip title="Display corrections grouped by user">
                        <Button>
                            <PersonIcon/>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Display corrections grouped by sentence">
                        <Button>
                            <LayersIcon/>
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
                        comments={correction.comments}/>
                ))}
            </Stack>
        </>
    );
};

export default PostDetailPage;