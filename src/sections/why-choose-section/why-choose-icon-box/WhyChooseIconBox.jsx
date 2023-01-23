import React from 'react';
import Grid from '@mui/material/Grid';
import WhyChooseIconBoxLargeMode from './WhyChooseIconBoxLargeMode';
import WhyChooseIconBoxSmallMode from './WhyChooseIconBoxSmallMode';
import PolymorphicOnResizeContainer from '../../../components/container/PolymorphicOnResizeContainer';
import PropTypes from 'prop-types';

const WhyChooseIconBox = ({ IconBoxDataList }) => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <PolymorphicOnResizeContainer
          largeModeComponent={
            <WhyChooseIconBoxLargeMode data={IconBoxDataList} />
          }
          smallModeComponent={
            <WhyChooseIconBoxSmallMode data={IconBoxDataList} />
          }
        />
      </Grid>
    </Grid>
  );
};

WhyChooseIconBox.prototype = {
  IconBoxDataList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export default WhyChooseIconBox;
