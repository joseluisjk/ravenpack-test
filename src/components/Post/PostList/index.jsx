import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import { getPosts, getPostsByUser, getUsers } from '../../../actions/post';
import styles from './index.module.scss';
import Post from './Post';
import CommonPagination from '../../common/Pagination';

const PostList = (props) => {
  const { isProfile, postsPerpage, userId } = props;
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = postsPerpage;
  const maxPages = Math.ceil(posts.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return posts.slice(begin, end);
  }

  useEffect(() => {
    if (isProfile) {
      getPostsByUser(userId).then(items => {
        setPosts(items);
      })
    } else {
      getPosts().then(items => {
        setPosts(items);
      });
    }

    getUsers().then(items => {
      setUsers(items);
    });
  }, [isProfile, userId])

  return (
    <>
      <Container>
        <Row className={styles.postList__Row}>
          {
            currentData().map(item => {
              return (
                <Post key={item.id} posts={item} users={users} />
              )
            })
          }
          <CommonPagination max={maxPages} setPage={setCurrentPage} currentPage={currentPage} postPerPage={postsPerpage} />
        </Row >
      </Container >
    </>
  );
}

PostList.propTypes = {
  postsPerpage: PropTypes.number.isRequired,
  isProfile: PropTypes.bool,
  userId: PropTypes.string
}

export default PostList