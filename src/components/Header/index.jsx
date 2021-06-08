import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';

import styles from './index.module.scss';

const Header = (props) => {
  const { title, subtitle } = props;

  return (
    <header className={styles.header__Header}>
      <Container className={styles.header__Container}>
        <Row className={styles.header__Row}>
          <Col xs={10} className={styles.header__Col}>
            <h1 className={styles.header__Title}>
              {title}
            </h1>
            {
              !isEmpty(subtitle) && (
                <span className={styles.header__Subtitle}>
                  {subtitle}
                </span>
              )
            }

          </Col>
        </Row>
      </Container>
    </header >
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default Header;