import React from 'react'
import LangCorrectAPI from '../api';
import PostCreateForm from '../components/posts/PostCreateForm';
import { Box } from '@mui/material';

const CreatePostPage = () => {
  async function createPost(formData: any) {
    return await LangCorrectAPI.createPost(formData);
  }

  return (
    <Box>
      <PostCreateForm onCreate={createPost} />
    </Box>
  )
}

export default CreatePostPage