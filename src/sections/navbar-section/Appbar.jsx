import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows["3"],
}));