import React from 'react';
import { useLocation, useParams } from 'react-router';

import Header from '../../components/Header';
import PostList from '../../components/Post/PostList';

const Profile = () => {
  const location = useLocation().state;

  return (
    <>
      <Header
        title={`${location.name} posts`}
      />
      <PostList postsPerpage={5} userId={useParams().id} isProfile />
    </>
  );
}

export default Profile;