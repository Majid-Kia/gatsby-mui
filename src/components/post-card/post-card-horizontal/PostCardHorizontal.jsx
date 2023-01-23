import PropTypes from 'prop-types';
import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import PostCardImage from '../PostCardImage';
import PostCardTitle from '../PostCardTitle';
import WriterAndPublishDate from '../WriterAndPublishDate';
import CustomHorizontalDivider from '../../divider/CustomHorizontalDivider';

const PostCardHorizontal = ({
  postData,
  hasDate,
  height,
  imageGrid,
  contentGrid,
}) => {
  return (
    <Card
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        borderRadius: 2,
        boxShadow: theme.shadows['1'],
      })}
    >
      <CardActionArea>
        <Grid
          container
          padding={2}
          flexDirection="row"
          flexWrap="nowrap"
          justifyContent="space-between"
        >
          <Grid
            item
            display={{ sm: 'flex', xs: 'none' }}
            mr={{ sm: 2, xs: 1.5 }}
            {...imageGrid}
          >
            <PostCardImage
              imageData={postData.image}
              alt={postData.title}
              height={height}
            />
          </Grid>
          <Grid item {...contentGrid}>
            <Grid
              container
              flexDirection="column"
              sx={{ height: '100%', flexWrap: 'nowrap' }}
            >
              <Grid item xs={12} mb={1}>
                <PostCardTitle title={postData.title} lineToShow={3} />
              </Grid>

              <Grid
                item
                xs={12}
                flexDirection="column"
                justifyContent="flex-end"
                sx={{ display: 'flex' }}
              >
                <CustomHorizontalDivider
                  sx={{ width: '100%', marginBottom: '8px' }}
                />
                <WriterAndPublishDate
                  hasDate={hasDate}
                  writerId={postData.writer}
                  publishDate={postData.publishDate}
                  timeToRead={postData.timeToRead}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

PostCardHorizontal.propTypes = {
  postData: PropTypes.shape({
    image: PropTypes.object.isRequired,
    writer: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  hasDate: PropTypes.bool,
  height: PropTypes.object,
  imageGrid: PropTypes.object,
  contentGrid: PropTypes.object,
};

export default PostCardHorizontal;
