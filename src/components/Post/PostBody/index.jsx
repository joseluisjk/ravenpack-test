import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

const PostBody = (props) => {
  const { content } = props;

  return (
    <article>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={8}>
            {content}
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
