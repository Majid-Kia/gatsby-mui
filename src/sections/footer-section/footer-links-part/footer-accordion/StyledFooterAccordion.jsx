import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";

const StyledFooterAccordion = styled(Accordion)(({
    "&.MuiPaper-root.MuiAccordion-root": {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
}))

export default StyledFooterAccordion;