import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { booksData } from "../data/books"; // Import the book data
import "./Books.css";
import Search from "./Search";
// import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../redux/cartSlice";

function Books() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems, "a");
  const [filteredBooks, setFilteredBooks] = React.useState(booksData);

  const handleSearch = (searchTerm) => {
    const filtered = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };
  function onClickHandler(book) {
    console.log("click", book);
    dispatch(setCartItems([...cartItems, book]));
  }

  return (
    <Container className="books">
      <Row>
        <Col>
          <h2 className="page-title">Books</h2>
        </Col>
        <Col>
          <Search onSearch={handleSearch} />
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredBooks.map((book) => (
          <Col key={book.id}>
            <Card className="book-card">
              <Card.Img variant="top" src={book.imageLink} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <strong>Author:</strong> {book.author}
                </Card.Text>
                <Card.Text>
                  <strong>Country:</strong> {book.country}
                </Card.Text>
                <Card.Text>
                  <strong>Language:</strong> {book.language}
                </Card.Text>
                <Card.Text>
                  <strong>Year:</strong> {book.year}
                </Card.Text>
                <Card.Text>
                  <strong>Pages:</strong> {book.pages}
                </Card.Text>
                <div className="d-flex justify-content-between w-100">
                  <Button
                    variant="primary"
                    href={`books/${book.id}`}
                    target="_blank"
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => onClickHandler(book)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Books;
