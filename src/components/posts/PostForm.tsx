import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useState } from "react";

export interface ICreatePostData extends FieldValues {
    title: string;
    text: string;
    native_text?: string;
    language: string;
    gender_of_narration: string;
    permission?: string;
    tags?: string;
}

const validationSchema = yup.object().shape({
    title: yup.string().max(60).required(),
    text: yup.string().min(50).required(),
    native_text: yup.string(),
    language: yup.string().required(),
    gender_of_narration: yup.string(),
    permission: yup.string(),
    // tags: yup.string(),
});

// interface IProps {
//     onCreate: (formData: ICreatePostData) => {
//         title: string;
//         text: string;
//         native_text: string;
//         language: number;
//         gender_of_narration: string;
//         permission: string;
//         tags: [];
//         slug: string;
//     };
// }

const PostForm = ({ post, onSubmit }) => {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const isEditing = post !== undefined && Object.keys(post).length > 0;
    const [errMsg, setErrMsg] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: post,
    });

    const { currentUser } = useAuth();

    const onSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await onSubmit(data);
            reset();

            if (!isEditing) {
                const { slug } = response.data;
                navigate(`/journals/${slug}`);
            }
        } catch (err) {
            if (err.response.status === 403) {
                setErrMsg(err.response.data?.detail);
            } else {
                console.log(
                    "🚀 ~ file: PostForm.tsx:73 ~ constonSubmitHandler:SubmitHandler<FieldValues>= ~ err:",
                    err,
                );
            }
        }
    };

    return (
        <form method="post" onSubmit={handleSubmit(onSubmitHandler)}>
            <Stack spacing={3} mb={3}>
                <TextField
                    required
                    {...register("title")}
                    label="Title"
                    error={!!errors.title}
                    helperText={errors.title && String(errors.title?.message)}
                />
                <TextField
                    multiline
                    rows={8}
                    required
                    {...register("text")}
                    label="Write in your target language"
                    error={!!errors.text}
                    helperText={errors.text && String(errors.text?.message)}
                />
                <TextField
                    multiline
                    rows={8}
                    {...register("native_text")}
                    label="Notes"
                    error={!!errors.native_text}
                    helperText={
                        errors.native_text &&
                        String(errors.native_text?.message)
                    }
                />
                <FormControl error={!!errors.language} fullWidth required>
                    <InputLabel id="language">Language</InputLabel>
                    <Select
                        {...register("language")}
                        label="Language"
                        defaultValue={post?.language || ""}
                    >
                        {currentUser?.get_studying_languages?.map((lang) => (
                            <MenuItem key={lang.code} value={lang.code}>
                                {lang.en_name}
                            </MenuItem>
                        ))}
                    </Select>
                    {errors.language && (
                        <FormHelperText>
                            {String(errors.language.message)}
                        </FormHelperText>
                    )}
                </FormControl>
                <FormControl
                    error={!!errors.gender_of_narration}
                    fullWidth
                    required
                >
                    <InputLabel id="gender">Gender of Narration</InputLabel>
                    <Select
                        {...register("gender_of_narration")}
                        label="Gender of Narration"
                        defaultValue={post?.gender_of_narration || "U"}
                    >
                        <MenuItem value="M">Male</MenuItem>
                        <MenuItem value="F">Female</MenuItem>
                        <MenuItem value="O">Other</MenuItem>
                        <MenuItem value="U">Prefer not to say</MenuItem>
                    </Select>
                    {errors.gender_of_narration && (
                        <FormHelperText>
                            {String(errors.gender_of_narration.message)}
                        </FormHelperText>
                    )}
                </FormControl>
                <FormControl error={!!errors.permission} fullWidth required>
                    <InputLabel id="visibility">Visibility</InputLabel>
                    <Select
                        {...register("permission")}
                        label="Visibility"
                        defaultValue={post?.permission || "public"}
                    >
                        <MenuItem value="public">Viewable by everyone</MenuItem>
                        <MenuItem value="member">
                            Viewable only by registered members
                        </MenuItem>
                    </Select>
                    {errors.permission && (
                        <FormHelperText>
                            {String(errors.permission.message)}
                        </FormHelperText>
                    )}
                </FormControl>
            </Stack>

            {errMsg && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {errMsg}
                </Alert>
            )}

            <Box display="flex" justifyContent="end" gap={1}>
                <Button variant="outlined" color="error" onClick={() => {}}>
                    {isEditing ? "Discard changes" : "Cancel"}
                </Button>
                <Button type="submit" variant="contained">
                    {isEditing ? "Save" : "Submit"}
                </Button>
            </Box>
        </form>
    );
};

export default PostForm;
