import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import React from "react";
import PropTypes from 'prop-types';


const CustomDrawer = ({ drawerState, handleDrawerState, children }) => {
    return (
        <Drawer
            anchor={'top'}
            open={drawerState}
            onClose={handleDrawerState}
            transitionDuration={4}
        >
            <Box>
                {children}
            </Box>
        </Drawer >
    )
}

CustomDrawer.prototype = {
    drawerState: PropTypes.bool.isRequired,
    setDrawerState: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default CustomDrawer;