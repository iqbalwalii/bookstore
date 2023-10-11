// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/Homepage";
import BooksPage from "./Components/BooksPage";
import AuthorsPage from "./Components/AuthorsPage";
import BookDetailsPage from "./Components/BooksDetail";
import ShoppingCart from "./Components/Cart";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/books/:bookId" element={<BookDetailsPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
