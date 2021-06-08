import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './index.module.scss';

const PostBody = (props) => {
  const { content } = props;

  return (
    <article className={styles.postBody__Article}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={8}>
            <p>
              {content}
            </p>
          </Col>
        </Row>
      </Container>
    </article>
  );
}

PostBody.propTypes = {
  content: PropTypes.any.isRequired
}

export default PostBody;
