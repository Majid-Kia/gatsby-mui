import React from 'react';
import Grid from '@mui/material/Grid';
import { StaticImage } from 'gatsby-plugin-image';


const FooterLogo = () => {
    return (
    <Grid container>
        <Grid item pb={{md: 1.5, xs: 0}}>
            <StaticImage alt={'cloudzy'} src={'./data/Logo_Footer.png'}/>
        </Grid>
    </Grid>
    )
}

export default FooterLogo;
