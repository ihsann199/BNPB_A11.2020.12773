import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeaturesPage = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/features")
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <React.Fragment>
      <Container className="mt-4">
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={4}>
              <Card>
                <Card.Img variant="top" src={feature.image} alt={feature.Title} />
                <Card.Body>
                  <Card.Title>Features</Card.Title>
                  <Card.Text>Masukan Deskripsi</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FeaturesPage;
