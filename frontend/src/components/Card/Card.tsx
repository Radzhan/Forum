import styled from '@emotion/styled';
import { Alert, AlertTitle, CardMedia } from '@mui/material';
import React from 'react';

const ImageCardMedia = styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%',
})

interface Props {
    message: string;
    author: string;
    image: string | null;
}
const Card: React.FC<Props> = ({ message, author, image }) => {

    let cardImage = 'http://localhost:8000/' + image;

    return (
        <Alert severity="info" sx={{ my: 3 }} >{
            image ? <ImageCardMedia image={cardImage} title={message} /> : null}
            <AlertTitle>{author}</AlertTitle>
            <strong>{message}</strong>
        </Alert>
    );
};

export default Card;

