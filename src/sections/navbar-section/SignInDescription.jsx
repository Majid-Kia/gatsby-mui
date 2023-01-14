import Typography from "@mui/material/Typography";
import React from "react";
import {signInContent} from "./data/menu.data";

const SignInDescription = () => {
    return (
        <Typography
            variant="body2"
            color="textSecondary"
            sx={{whiteSpace: 'initial'}}
        >
            {signInContent.DESCRIPTION.text}
        </Typography>
    )
}

export default SignInDescription;