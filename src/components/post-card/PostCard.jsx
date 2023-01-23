import React from 'react';
import PostCardVertical from './post-card-vertical/PostCardVertical';
import PostCardHorizontal from './post-card-horizontal/PostCardHorizontal';
import PropTypes from 'prop-types';
import CustomLink from '../link/CustomLink';

const PostCard = ({
  postData,
  mode,
  hasDate,
  height,
  imageGrid,
  contentGrid,
}) => {
  if (mode === 'vertical') {
    return (
      <CustomLink navigationObject={{ link: postData.link }} className="postCardBlogAndKBSection">
        <PostCardVertical
          hasDate={hasDate}
          postData={postData}
          height={height}
        />
      </CustomLink>
    );
  } else {
    return (
      <CustomLink navigationObject={{ link: postData.link }} className="postCardBlogAndKBSection">
        <PostCardHorizontal
          hasDate={hasDate}
          postData={postData}
          height={height}
          imageGrid={imageGrid}
          contentGrid={contentGrid}
        />
      </CustomLink>
    );
  }
};

PostCard.propTypes = {
  postData: PropTypes.shape({
    image: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timeToRead: PropTypes.number,
  }),
  hasDate: PropTypes.bool,
  mode: PropTypes.string,
  height: PropTypes.object,
  imageGrid: PropTypes.object,
  contentGrid: PropTypes.object,
};

export default PostCard;
