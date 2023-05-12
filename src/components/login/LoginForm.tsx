import { Alert, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    "username": "",
    "password": ""
};

interface FormDataInterface {
    username: string;
    password: string;
}

interface LoginFormProps {
    onLogin: (formData: FormDataInterface) => void;
}


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
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState([]);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        try {
            await onLogin(formData);
            navigate("/");
        } catch (err) {
            setErrors(err);
        }
    };

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>

                {errors && errors.map((er, idx) => <Alert key={idx} severity="warning" sx={{ mb: 3 }}>{er}</Alert>)}

                <Stack spacing={3} mb={3}>

                    <TextField
                        name="username"
                        label="username"
                        onChange={handleChange}
                        value={formData.username}
                        required
                    />

                    <TextField
                        name="password"
                        label="Password"
                        type='password'
                        onChange={handleChange}
                        value={formData.password}
                        required
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