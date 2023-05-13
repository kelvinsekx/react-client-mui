import { Alert } from '@mui/material';

interface Prop {
    messages: string[];
}

const AuthAlerts = ({ messages }: Prop) => {
    return (
        <>
            {messages.map((msg, idx) => (
                <Alert key={idx} severity="warning" sx={{ mb: 3 }}>{msg}</Alert>
            ))}
        </>
    );
};

export default AuthAlerts;


