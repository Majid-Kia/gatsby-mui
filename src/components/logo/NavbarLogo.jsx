import React from 'react';
import Grid from '@mui/material/Grid';
import { StaticImage } from 'gatsby-plugin-image';

const NavbarLogo = () => {
    return (
        <Grid container alignItems="center">
            <Grid item>
                <StaticImage alt={'cloudzy'} loading="eager" src={'./data/Logo_Navbar.png'} />
            </Grid>
        </Grid>
    );
}

export default NavbarLogo;
