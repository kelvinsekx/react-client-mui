import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsPopover = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton>
                <SettingsIcon color="action" />
            </IconButton>
        </>
    );
};

export default SettingsPopover;