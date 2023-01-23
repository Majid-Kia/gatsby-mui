import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomButton from "../../../../components/button/CustomButton";
import PropTypes from 'prop-types';
import CustomLink from "../../../../components/link/CustomLink";

const _404data = {
    title: 'WhoOops!',
    subtitle: 'Looks like you got lost in Cloudzy',
    description: 'Sorry, the page you were looking for could not be found',
    action: {
        link: '/',
        actionText: 'BACK TO HOMEPAGE'
    }
};

const _404title = ({ title, subtitle }) => {
    return <>
        <Typography variant="h1" color='secondary'>{title}</Typography>
        <Typography variant="h1" color='text.primary'>{subtitle}</Typography>
    </>;
};

const _404description = ({ description }) => <Typography variant="h6">{description}</Typography>;

const _404action = ({ action }) => {
    return (
        <CustomButton
            id="heroStartingButton"
            variant="contained"
            color="secondary"
            contentText={<CustomLink sx={(theme) => ({ color: theme.palette.white.default })} navigationObject={action}>{action.actionText}</CustomLink>}
        />
    );
};
    
const _404introduction = () => {
    return (
        <Grid container pr={1}>
            <Grid item xs={12} sx={{ lineHeight: '42px' }}>
                <_404title title={_404data.title} subtitle={_404data.subtitle} />
            </Grid>

            <Grid item xs={12} mt={{ xs: 3, sm: 4 }}>
                <_404description description={_404data.description} />
            </Grid>

            <Grid item xs={12} mt={{ xs: 3, sm: 4, lg: 6 }}>
                <_404action action={_404data.action} />
            </Grid>
        </Grid>
    );
};

export default _404introduction;

_404title.prototype = { title: PropTypes.string.isRequired, subtitle: PropTypes.string.isRequired };
_404description.prototype = { description: PropTypes.string.isRequired };
_404action.prototype = {
    action: PropTypes.objectOf(PropTypes.shape({
        actionText: PropTypes.string.isRequired,
        sectionId: PropTypes.string.isRequired
    })).isRequired
};