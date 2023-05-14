import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthAlerts from './AuthAlerts';
import Box from "@mui/material/Box";


interface FormDataInterface extends FieldValues {
    username: string;
    password: string;
}

const validationSchema = yup.object().shape({
    username: yup.string().min(6).max(16).required(),
    password: yup.string().min(8).max(32).required(),
});


interface Props {
    onLogin: (formData: FormDataInterface) => void;
}

const LoginForm = ({ onLogin }: Props) => {
    const navigate = useNavigate();

    const [loginErrors, setLoginErrors] = useState<string[] | null>(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        setLoginErrors(null);
        try {
            const formData = data as FormDataInterface;
            await onLogin(formData);
            navigate("/");
            reset();
        } catch (err: any) {
            setLoginErrors(err);
        }
    };

    return (
        <>
            <form method="post" onSubmit={handleSubmit(onSubmitHandler)}>

                {loginErrors && <AuthAlerts messages={loginErrors}/>}

                <Stack spacing={3} mb={3}>
                    <TextField
                        required
                        {...register("username")}
                        label="username"
                        error={!!errors.username}
                        helperText={errors.username && String(errors.username.message)}
                    />
                    <TextField
                        required
                        {...register("password")}
                        label="Password"
                        type='password'
                        error={!!errors.password}
                        helperText={errors.password && String(errors.password.message)}
                    />
                </Stack>

                <Box display="flex" justifyContent="end">
                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default LoginForm;