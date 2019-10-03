import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <Container>
    <Row>
      <Col>Hello NextJS</Col>
    </Row>
    <Row>
      <Col>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Col>
    </Row>
  </Container>
);
