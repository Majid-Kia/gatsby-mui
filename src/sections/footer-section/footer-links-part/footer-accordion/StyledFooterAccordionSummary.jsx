import { styled } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";

const StyledFooterAccordionSummary = styled(AccordionSummary)(({
    "& .MuiAccordionSummary-expandIconWrapper": {
        svg: {
            fill: "white",
            filter: "invert(100%) sepia(100%) saturate(1%) hue-rotate(104deg) brightness(105%) contrast(102%)",
        },
        path: {
            fill: "white",
            filter: "invert(100%) sepia(100%) saturate(1%) hue-rotate(104deg) brightness(105%) contrast(102%)",
        }
    },
}))

export default StyledFooterAccordionSummary;