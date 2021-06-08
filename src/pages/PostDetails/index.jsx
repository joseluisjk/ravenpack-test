import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header';
import { getCommentsFromPost, getPost, getUser } from '../../actions/post';
import PostBody from '../../components/Post/PostBody';
import Author from '../../components/Post/Author';
import CommentSection from '../../components/Post/CommentSection';

const PostDetails = () => {
  const [postData, setPostData] = useState({ userId: 0, id: 0, title: '', body: '', name: '', email: '', website: '' });
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    getPost(params.id).then(postItems => {
      setPostData({ userId: postItems.userId, id: postItems.id, title: postItems.title, body: postItems.body });
      getUser(postItems.userId).then((userItems) => {
        setPostData((prevState) => ({ ...prevState, name: userItems.name, email: userItems.email, website: userItems.website }));
      });
      getCommentsFromPost(postItems.id).then(commentItems => {
        setComments(commentItems);
      })
    });
  }, [params]);

  return (
    <>
      <Header
        title={postData.title}
        subtitle={`Post by: ${postData.name} ${postData.email}`}
      />
      <PostBody content={postData.body} />
      <Author userData={postData} />
      <CommentSection comments={comments} />
    </>
  );
}

export default PostDetails