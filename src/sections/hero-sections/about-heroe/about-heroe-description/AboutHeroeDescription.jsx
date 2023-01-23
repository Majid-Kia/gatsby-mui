import React from 'react';
import Typography from '@mui/material/Typography';
import CustomButton from 'components/button/CustomButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import data from '../data/aboutHeroe.data';

export const AboutHeroeDescription = () => {
  return (
    <>
      <Typography
        sx={{ color: (theme) => theme.palette.text.primary }}
        variant="h1"
      >
        {data.title}
      </Typography>
      <Typography
        sx={{ color: (theme) => theme.palette.text.secondary }}
        mt={{ md: 5, xs: 3 }}
        variant="h6"
        component="h4"
      >
        {data.description}
      </Typography>
      <CustomButton
        variant={'contained'}
        color={'secondary'}
        endIcon={<ArrowDownwardIcon />}
        contentText={data.action.actionText}
        navigationObject={data.action}
        sx={{ marginTop: { md: 5, xs: 3 } }}
      />
    </>
  );
};
