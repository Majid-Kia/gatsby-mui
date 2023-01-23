import React from 'react';
import Grid from '@mui/material/Grid';
import CustomButton from '../button/CustomButton';
import Proptypes from "prop-types";

const LoadMoreBlog = ({ numberOfItem, currentNumberOfPost, setCurrentNumberOfPost, text }) => {
    const handleLoadMore = () => {
        setCurrentNumberOfPost(currentNumberOfPost + numberOfItem);
    };

    return (
        <Grid container justifyContent='center'>
            <Grid item>
                <CustomButton
                    contentText={text}
                    onClick={handleLoadMore}
                    variant={'contained'}
                    textColor={(theme) => theme.palette.primary.main}
                    color={'info'}
                />
            </Grid>
        </Grid>
    );
};

LoadMoreBlog.prototype = {
    numberOfItem: Proptypes.string.isRequired,
    next: Proptypes.string.isRequired,
    setNext: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired
}

export default LoadMoreBlog;
