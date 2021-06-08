import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';

import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const Author = (props) => {
  const { name, email, website, userId } = props.userData;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} className={styles.author__ColContainer}>
          <Card border="secondary">
            <Row className="no-gutters">
              <Col lg={4}>
                <Card.Img src={`https://eu.ui-avatars.com/api/?name=${name}`} alt="Author pic" />
              </Col>
              <Col className="col-md-8">
                <Card.Body className="card-body">
                  <h5>About the author: <Link className={styles.author__AuthorLink} to={{ pathname: `/profile/${userId}` }}>{name}</Link></h5>
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
