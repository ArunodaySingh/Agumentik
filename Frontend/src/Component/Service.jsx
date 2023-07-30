import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHome, FaCar, FaHotel } from "react-icons/fa";

function ServicesComponent() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <h2>Services You Get from Restate</h2>
          <p>
            We provide exceptional real estate services with a focus on customer
            satisfaction.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <FaHome size={48} />
              <Card.Title>Residential</Card.Title>
              <Card.Text>
                We offer a wide range of residential properties to suit your
                needs and preferences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <FaCar size={48} />
              <Card.Title>Commercial</Card.Title>
              <Card.Text>
                Our commercial properties are strategically located for your
                business success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <FaHotel size={48} />
              <Card.Title>Vacation Rentals</Card.Title>
              <Card.Text>
                Enjoy a memorable vacation with our exclusive vacation rental
                properties.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="text-center">
          <p>
            Contact us now to find the perfect property that meets your needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesComponent;
