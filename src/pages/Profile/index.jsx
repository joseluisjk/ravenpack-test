import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUser } from '../../actions/post';

import Header from '../../components/Header';
import PostList from '../../components/Post/PostList';

const Profile = () => {
  const params = useParams();
  const [name, setName] = useState("")

  useEffect(() => {
    getUser(params.id).then((items) => {
      setName(items.name)
    })
  }, [params])

  return (
    <>
      <Header
        title={`${name} posts`}
      />
      <PostList postsPerpage={5} userId={params.id} isProfile />
    </>
  );
}

export default Profile;