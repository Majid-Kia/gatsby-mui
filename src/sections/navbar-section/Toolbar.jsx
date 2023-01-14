import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: "80px",
  width: "100%",
  justifyContent: "space-between",
}));
