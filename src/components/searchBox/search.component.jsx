import React, { useState } from 'react';
import './search.styles.scss';
import propTypes from 'prop-types';

const Search = ({ showClear, clearUsers, setAlert, searchUsers }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter A Valid Username', 'red');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="search"
          placeholder="Search A Github User"
          className="search-box"
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Search" className="submit-btn" />
      </form>
      {showClear && (
        <button className="clear-btn" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
  clearUsers: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
  setAlert: propTypes.func.isRequired,
};

export default Search;
