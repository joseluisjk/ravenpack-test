import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

import styles from './index.module.scss';

const Comment = (props) => {
  const { name, email, body } = props.data;

  return (
    <Card border="secondary" className={styles.comment__CardContainer}>
      <Row className="no-gutters">
        <Col lg={4}>
          <Card.Img src={`https://eu.ui-avatars.com/api/?name=${name}&background=000000&color=fff`} alt="Author pic" />
        </Col>
        <Col className="col-md-8">
          <Card.Body className="card-body">
            <h5>{name}</h5>
            <h6>{email}</h6>
            <p>{body}</p>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired
}

export default Comment;
