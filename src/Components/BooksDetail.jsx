import React from "react";
import { Image } from "react-bootstrap";
import { booksData } from "../data/books";
import "./detail.css";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { bookId } = useParams();
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    console.log(bookId);
    // Find the book with the given ID
    const foundBook = booksData.find(
      (book) => book.id === parseInt(bookId, 10)
    );

    // Update the book state when the data is fetched
    setBook(foundBook);
  }, [bookId]);

  // When book is still null (loading), you can display a loading indicator
  if (book === null) {
    return <div>Loading...</div>;
  }

  // If no book is found, display a "Book not found" message
  if (!book) {
    return <div>Book not found</div>;
  }
  console.log(book);
  return (
    <div className="book-detail mt-5">
      <div className="book-image">
        <Image
          src={`../../public/${book.imageLink}`}
          alt={book.title}
          width="100%px"
        />
      </div>
      <div className="book-info">
        <h2>{book.title}</h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Country:</strong> {book.country}
        </p>
        <p>
          <strong>Language:</strong> {book.language}
        </p>
        <p>
          <strong>Year:</strong> {book.year}
        </p>
        <p>
          <strong>Pages:</strong> {book.pages}
        </p>
        <p>
          <strong>Link:</strong>{" "}
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
        </p>
      </div>
    </div>
  );
}

export default BookDetail;
