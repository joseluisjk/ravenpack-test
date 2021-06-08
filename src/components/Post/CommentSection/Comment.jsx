import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

import styles from './index.module.scss';

const Comment = (props) => {
  const { data } = props;

  return (
    <Card border="secondary" className={styles.comment__CardContainer}>
      <Row className="no-gutters">
        <Col lg={4}>
          <Card.Img src={`https://www.tinygraphs.com/spaceinvaders/${data.name}?theme=frogideas&numcolors=4&size=220&fmt=svg`} alt="Author pic" />
        </Col>
        <Col className="col-md-8">
          <Card.Body className="card-body">
            <h5>{data.name}</h5>
            <h6>{data.email}</h6>
            <p>{data.body}</p>
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
