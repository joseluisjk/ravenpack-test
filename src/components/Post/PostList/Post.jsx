import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Post = (props) => {
  const { posts, users } = props;
  const { id, title, body, userId } = posts;

  return (
    <Col className={styles.postList__Preview} xs={10} key={id}>
      <Link
        to={{
          pathname: `/post/${id}`,
          state: {
            postId: id
          }
        }}
      >
        <h2 className={styles.postList__Title}>{title}</h2>
        <h3 className={styles.postList__Subtitle}>{body}</h3>
      </Link>
      <p className={styles.postList__MetaData}>
        Posted by
          {
          users.map(items => {
            if (isEqual(items.id, userId)) {
              return (
                <Link
                  to={{
                    pathname: `/profile/${userId}`,
                    state: {
                      name: items.name
                    }
                  }}
                  key={items.id}
                >
                  {items.name}
                </Link>
              )
            }
          })
        }
         on September 24, 2021
      </p>
    </Col >
  )
}

Post.propTypes = {
  posts: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
}

export default Post;