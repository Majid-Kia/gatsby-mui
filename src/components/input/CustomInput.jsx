import React from "react";
import Box from '@mui/material/Box';
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const CustomInput = ({id, label, handleChange, startIcon, multilineRows, endAdornment}) => {
    return (
        <TextField
            variant="outlined"
            id={id}
            label={label}
            sx={(theme) => ({
                width: 1,
                "&.Mui-focused": {
                    color: theme.palette.primary + " !important",
                },
                "& .MuiFormLabel-root": {
                    color: theme.palette.grey["300"],
                }
            })}
            multiline={!!multilineRows}
            rows={multilineRows}
            onChange={handleChange}
            InputProps={{
                startAdornment:(
                    <Box
                        sx={(theme) => ({
                            alignSelf: !!multilineRows ? "flex-start":"center",
                            color: theme.palette.grey["400"],
                        })}
                        paddingRight={1} paddingTop={!multilineRows && 1}>
                            {startIcon}
                    </Box>
                ),
                endAdornment,
                sx: (theme) => ({
                    borderWidth: 1,
                    backgroundColor: theme.palette.background.default,
                    borderColor: theme.palette.grey["300"],
                    svg: {
                        color: theme.palette.grey["300"]
                    },
                    "&.Mui-focused": {
                        svg: {
                            color: theme.palette.primary.main
                        }
                    },
                }),
            }}

        />
    )
}

CustomInput.prototype = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    startIcon: PropTypes.element.isRequired,
    multilineRows: PropTypes.bool,
    endAdornment: PropTypes.element
}

export default CustomInput;