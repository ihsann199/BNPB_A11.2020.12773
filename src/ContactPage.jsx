import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Container className="mt-4">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Features</Card.Title>
                <Card.Text>Masukan Deskripsi</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ContactPage;
