import React from 'react';
import PropTypes from 'prop-types';
import FixedLineTypegraphy from "../typography/FixedLineTypography";
import { useTheme } from "@mui/material/styles";

const PostCardTitle = ({ title, lineToShow }) => {
    const theme = useTheme();
    return (
        <FixedLineTypegraphy
            lineToShow={{
                xs: lineToShow,
                sm: lineToShow,
                md: lineToShow,
                lg: lineToShow
            }}
            content={title}
            color={theme.palette.text.primary}
            variant={"subtitle1"}
        />
    )
}

PostCardTitle.prototype = {
    title: PropTypes.string.isRequired,
    lineToShow: PropTypes.number.isRequired
}

export default PostCardTitle;