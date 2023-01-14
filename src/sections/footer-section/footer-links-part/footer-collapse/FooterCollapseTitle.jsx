import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomCollapseTitle from '../../../../components/collapse/CustomCollapseTitle';

const FooterCollapseTitle = ({ title, expanded, setExpanded }) => {
    return (
        <CustomCollapseTitle
            expanded={expanded}
            setExpanded={setExpanded}
            title={
                <Typography
                    variant="subtitle2"
                    sx={(theme) => ({
                        color: theme.palette.grey['A400'],
                    })}
                >
                    {title}
                </Typography>
            }
            icon={<KeyboardArrowDownIcon
                sx={(theme) => ({
                    color: theme.palette.secondary.main,
                })}
            />}
        />
    );
};

FooterCollapseTitle.prototype = {
    title: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,
    setExpanded: PropTypes.bool.isRequired,
};

export default FooterCollapseTitle;
