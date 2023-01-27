import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

interface Props {
    message: string;
    author: string;
}
const Card: React.FC<Props> = ({ message, author })=> {
    return (
        <Alert severity="info" sx={{my: 3}}>
            <AlertTitle>{author}</AlertTitle>
            <strong>{message}</strong>
        </Alert>
    );
};

export default Card;

