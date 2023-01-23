import React from 'react';
import Grid from '@mui/material/Grid';
import PostCard from '../../components/post-card/PostCard';
import LoadMoreBlog from '../../components/load-more-blog/LoadMoreBlog';

const BlogAndKbLatestPosts = ({ posts }) => {
    const numberOfPost = 9;
    const [currentNumberOfPost, setCurrentNumberOfPost] =
        React.useState(numberOfPost);
    return (
        <Grid
            container
            spacing={{ lg: 3, md: 3, sm: 2, xs: 2 }}
        >
            {posts.slice(0, currentNumberOfPost).map((item, index) => (
                <Grid item key={index} lg={4} md={6} sm={12} xs={12}>
                    <PostCard mode="vertical" hasDate={true} postData={item} />
                </Grid>
            ))}
            {currentNumberOfPost <= posts.length && (
                <Grid item mt={{ lg: 4, md: 3, sm: 3, xs: 3 }} xs={12}>
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

export default BlogAndKbLatestPosts;
