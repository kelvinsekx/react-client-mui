import { Alert, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormDataInterface extends FieldValues {
    username: string;
    password: string;
}

interface LoginFormProps {
    onLogin: (formData: FormDataInterface) => void;
}

const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).max(32).required(),
});


/**
 * Renders the login form
 *
 * Props:
 * - onLogin
 *
 * {LoginPage} -> LoginForm
 */

const LoginForm = ({ onLogin }: LoginFormProps) => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const [alertError, setAlertError] = useState([]);

    const onSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        setAlertError([]);

        try {
            const formData = data as FormDataInterface;
            await onLogin(formData);
            navigate("/");
            reset();
        } catch (err: any) {
            setAlertError(err);
        }
    };

    return (
        <>
            <form method="post" onSubmit={handleSubmit(onSubmitHandler)}>

                {alertError && alertError.map((er, idx) =>
                    (<Alert key={idx} severity="warning" sx={{ mb: 3 }}>{er}</Alert>)
                )}

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

                <Stack direction="row" justifyContent="space-between">
                    <Button>Forgot password?</Button>
                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                </Stack>

            </form>
        </>);
};

export default LoginForm;