// import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { authorsData } from "../data/authors"; // Import the author data
import "./authors.css";

function AuthorsPage() {
  return (
    <Container className="authors">
      <h2 className="page-title">Authors</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {authorsData.map((author) => (
          <Col key={author.name}>
            <Card className="author-card">
              <Card.Body>
                <Card.Title>{author.name}</Card.Title>
                <Card.Text>
                  <strong>Born:</strong> {author.born}
                </Card.Text>
                <Card.Text>
                  <strong>Died:</strong> {author.died}
                </Card.Text>
                <Card.Text>
                  <strong>Nationality:</strong> {author.nationality}
                </Card.Text>
                <Card.Text>
                  <strong>Genres:</strong> {author.genres.join(", ")}
                </Card.Text>
                <Card.Text>
                  <strong>Major Works:</strong> {author.majorWorks.join(", ")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AuthorsPage;
