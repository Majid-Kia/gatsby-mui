import PropTypes from 'prop-types';
import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import PostCardImage from '../PostCardImage';
import PostCardTitle from '../PostCardTitle';
import WriterAndPublishDate from '../WriterAndPublishDate';
import CustomHorizontalDivider from '../../divider/CustomHorizontalDivider';

const PostCardVertical = ({ postData, hasDate, height }) => {
  return (
    <Card
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        borderRadius: 2,
        boxShadow: theme.shadows['1'],
      })}
    >
      <CardActionArea
        sx={{
          height: 1,
        }}
      >
        <Grid
          container
          padding={2}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Grid item xs={12} mb={{ sm: 2, xs: 1.5 }}>
            <PostCardImage
              imageData={postData.image}
              alt={postData.title}
              height={height}
            />
          </Grid>
          <Grid item xs={12} mt={{ md: 1, xs: 0 }} mb={{ sm: 4, xs: 2 }}>
            <PostCardTitle title={postData.title} lineToShow={2} />
          </Grid>
          <Grid item xs={12}>
            <CustomHorizontalDivider />
          </Grid>
          <Grid item xs={12} mt={2}>
            <WriterAndPublishDate
              hasDate={hasDate}
              writerId={postData.writer}
              publishDate={postData.publishDate}
              timeToRead={postData.timeToRead}
            />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

PostCardVertical.propTypes = {
  postData: PropTypes.shape({
    image: PropTypes.object.isRequired,
    writer: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  hasDate: PropTypes.bool,
  height: PropTypes.object,
};

export default PostCardVertical;
