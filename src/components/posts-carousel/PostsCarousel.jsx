import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../../components/post-card/PostCard';
import CircleNavButtonCarousel from '../carousel/CircleNavButtonCarousel';

const PostsCarousel = ({ posts }) => {
  return (
    <CircleNavButtonCarousel
      items={posts.map((post) => (
        <PostCard
          key={post.title}
          mode="vertical"
          hasDate={false}
          postData={post}
        />
      ))}
      pageElementsIn={{
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    />
  );
};

PostsCarousel.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      link: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      timeToRead: PropTypes.number,
    }),
  ),
};

export default PostsCarousel;
