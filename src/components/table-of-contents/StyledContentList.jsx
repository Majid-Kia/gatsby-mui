import { styled } from '@mui/material/styles';

const StyledContentList = styled('ul')(({ theme }) => ({
    counterReset: 'item',
    "ul": {
        marginLeft: '1.25rem',
    }
}));

export default StyledContentList;
