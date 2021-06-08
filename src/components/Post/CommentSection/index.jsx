import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import styles from './index.module.scss';
import Comment from './Comment';

const CommentSection = (props) => {
  const { comments } = props;

  return (
    <Container>
      <Row className={styles.commentSection__Row}>
        <h3>Comment section</h3>
        <Col xs={10} lg={8}>
          {
            comments.map(item => {
              return (
                <Comment data={item} />
              )
            })
          }
        </Col>
      </Row>
    </Container >
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentSection;
