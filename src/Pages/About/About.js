import React from 'react'
import { Container, Row } from 'react-bootstrap';
import styles from './about.module.scss';

const About = () => {
      return (
            <div>
                  <Container className={styles.container}>
                        <Row>
                              <h1 className="py-3 text-center">About Us</h1>
                              <p>Every day is a separate psychology, but the same place!Bobi was created to reflect that every person has a different psychology and that even the happiest person sometimes feels like they have been imprisoned in the grave.Reflect out your style, psychology and choices…</p>
                        </Row>
                  </Container>
            </div>
      );
}

export default About;