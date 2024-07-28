// Mengimpor React.
import { Container, Row, Col, Card } from "react-bootstrap"; // Mengimpor komponen-komponen React Bootstrap yang dibutuhkan.

const HomePage = () => {
  return (
    <Container className="mt-4">
      {" "}
      <Row>
        <Col md={4}>
          {" "}
          <Card>
            {" "}
            <Card.Img variant="top" src="public/gambar/gunung.jpg" />
            <Card.Body>
              <Card.Title>Disaster 1</Card.Title>
              <Card.Text>Description of Disaster 1. // Menampilkan deskripsi singkat bencana.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="public/gambar/gunung.jpg" />
            <Card.Body>
              <Card.Title>Disaster 2</Card.Title>
              <Card.Text>Description of Disaster 2. // Menampilkan deskripsi singkat bencana.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="public/gambar/gunung.jpg" />
            <Card.Body>
              <Card.Title>Disaster 3</Card.Title>
              <Card.Text>Description of Disaster 3. // Menampilkan deskripsi singkat bencana.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage; // Mengekspor komponen HomePage untuk digunakan di file lain.
