import React from "react";

const SearchBox = ({ filterText, onChange }) => (
  <input
    type="text"
    placeholder="Find contacts by name"
    value={filterText}
    onChange={onChange}
  />
);

export default SearchBox;
