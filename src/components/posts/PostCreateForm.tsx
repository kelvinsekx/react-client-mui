import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
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

const PostCreateForm = () => {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { currentUser } = useAuth();

    const onSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await axiosPrivate.post("/journals/", data);
            const { slug } = response.data;
            reset();
            navigate(`/journals/${slug}`);
        } catch (err) {
            console.log(
                "🚀 ~ file: PostCreateForm.tsx:74 ~ constonSubmitHandler:SubmitHandler<FieldValues>= ~ err:",
                err,
            );
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
                    helperText={errors.title && String(errors.title.message)}
                />
                <TextField
                    multiline
                    rows={8}
                    required
                    {...register("text")}
                    label="Write in your target language"
                    error={!!errors.text}
                    helperText={errors.text && String(errors.text.message)}
                />
                <TextField
                    multiline
                    rows={8}
                    {...register("native_text")}
                    label="Notes"
                    error={!!errors.native_text}
                    helperText={
                        errors.native_text && String(errors.native_text.message)
                    }
                />
                <FormControl error={!!errors.language} fullWidth required>
                    <InputLabel id="demo-simple-select-label">
                        Language
                    </InputLabel>
                    <Select
                        {...register("language")}
                        label="Language"
                        defaultValue=""
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
                    <InputLabel id="demo-simple-select-label">
                        Gender of Narration
                    </InputLabel>
                    <Select
                        {...register("gender_of_narration")}
                        label="Gender of Narration"
                        defaultValue="U"
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
                <FormControl
                    error={!!errors.language}
                    fullWidth
                    required
                    defaultValue=""
                >
                    <InputLabel id="demo-simple-select-label">
                        Visibility
                    </InputLabel>
                    <Select
                        {...register("permission")}
                        label="Visibility"
                        defaultValue="public"
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

            <Box display="flex" justifyContent="end">
                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default PostCreateForm;
