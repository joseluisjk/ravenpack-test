import React from 'react';

import Header from '../../components/Header';
import PostList from '../../components/Post/PostList';

const Landing = () => {
  return (
    <>
      <Header
        title="List of all posts"
        subtitle="A list with all post, you can click on one username and see the user posts in a modal, or click in one post to see details!"
      />
      <PostList postsPerpage={10} />
    </>
  );
}

export default Landing