// import React from "react";
import { Container, Button } from "react-bootstrap";
import "./HomePage.css"; // Import your CSS file for additional styling
import "./Homepage.css";
import { LinkContainer } from "react-router-bootstrap";
function HomePage() {
  return (
    <div className="homepage">
      <header className="hero">
        <Container>
          <h1 className="display-4">Welcome to Our Bookstore</h1>
          <p className="lead">Discover a world of books and stories.</p>
          <LinkContainer to="/books">
            <Button variant="primary" size="lg">
              Explore Books
            </Button>
          </LinkContainer>
        </Container>
      </header>
      <Container className="featured-books">
        <h2>Featured Books</h2>
        <div className="book">
          <img src="book1.jpg" alt="Featured Book 1" />
          <h3>Ham On Rye</h3>
          <p>
            Legendary barfly Charles Bukowski&apos;s fourth novel, first
            published in 1982, is probably the most autobiographical and moving
            of all
          </p>
        </div>
        <div className="book">
          <img src="book2.jpg" alt="Featured Book 2" />
          <h3>Beloved</h3>
          <p>
            The world of Sethe, however, is to turn from one of love to one of
            violence and death - the death of Sethe&apos;s baby daughter
            Beloved,{" "}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
