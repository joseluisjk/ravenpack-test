import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';

import styles from './index.module.scss';

const Author = (props) => {
  const { name, email, website } = props.userData;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} className={styles.author__ColContainer}>
          <Card border="secondary">
            <Row className="no-gutters">
              <Col lg={4}>
                <Card.Img src={`https://www.tinygraphs.com/spaceinvaders/${name}?theme=base&numcolors=4&size=220&fmt=svg`} alt="Author pic" />
              </Col>
              <Col className="col-md-8">
                <Card.Body className="card-body">
                  <h5>About the author: {name}</h5>
                  <p><b>Short description about the author</b></p>
                  <p><b>Email: </b>{email}</p>
                  <p><b>Website: </b>{website}</p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row >
    </Container >
  );
}

Author.propTypes = {
  userData: PropTypes.object.isRequired
}

export default Author;
