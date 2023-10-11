import React from "react";
import { Form, FormControl } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };
  return (
    <Form className="d-flex">
      <FormControl
        type="text"
        placeholder="Search books"
        value={searchTerm}
        onChange={onChangeHandler}
      />
    </Form>
  );
}

export default Search;
