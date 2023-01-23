import React from 'react';
import Grid from '@mui/material/Grid';
import PostCard from 'components/post-card/PostCard';
import PropTypes from 'prop-types';
import LoadMoreBlog from 'components/load-more-blog/LoadMoreBlog';

const ListItemsHorizontalCard = ({ items, mt }) => {
  const numberOfPost = 9;
  const [currentNumberOfPost, setCurrentNumberOfPost] =
    React.useState(numberOfPost);
  return (
    <Grid
      container
      spacing={3}
      mt={mt}
      sx={{ position: 'relative', zIndex: 2 }}
      mb={{ lg: 4, md: 3, xs: 3 }}
    >
      {items.slice(0, currentNumberOfPost).map((post) => {
        return (
          <Grid item xs={12} key={post.link}>
            <PostCard
              height={{ sm: 'auto' }}
              avatarWidth="28px"
              hasDate={true}
              postData={post}
              imageGrid={{ md: 3.1, sm: 4.7, xs: 0 }}
              contentGrid={{ md: 8.9, sm: 7.3, xs: 12 }}
            />
          </Grid>
        );
      })}
      {currentNumberOfPost <= items.length && (
        <Grid item mb={{ lg: 14.75, md: 12, xs: 19.5 }} xs={12}>
          <LoadMoreBlog
            numberOfItem={numberOfPost}
            currentNumberOfPost={currentNumberOfPost}
            setCurrentNumberOfPost={setCurrentNumberOfPost}
            text={'LOAD MORE POSTS'}
          />
        </Grid>
      )}
    </Grid>
  );
};

ListItemsHorizontalCard.prototype = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      link: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
    }),
  ),
  mt: PropTypes.object.isRequired,
};

export default ListItemsHorizontalCard;
