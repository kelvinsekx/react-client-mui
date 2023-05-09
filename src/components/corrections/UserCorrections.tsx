import { Avatar, Card, CardHeader, Divider, List } from '@mui/material';
import Correction, { CorrectionInterface } from './Correction';

interface UserCorrectionsInterface {
    username: string;
    corrections: CorrectionInterface[];
}

/**
 * Renders corrections made by a user
 *
 * Props:
 * - username
 * - corrections
 *
 * {PostDetailPage} -> UserCorrections
 */
const UserCorrections = ({ username, corrections }: UserCorrectionsInterface) => {
    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar>
                            {username.slice(0, 1)}
                        </Avatar>
                    }
                    title={username}
                />
                <Divider />
                <List disablePadding>
                    {corrections.map((correction) => (
                        <Correction key={correction.correction_id ? correction.correction_id :
                            correction.perfect_id} data={correction}/>
                    ))}
                </List>
            </Card>
        </>
    );
};

export default UserCorrections;




