import React from 'react';
import './search.styles.scss';
import propTypes from 'prop-types';

class Search extends React.Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please Enter A Valid Username', 'red');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="search"
            placeholder="Search A Github User"
            className="search-box"
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

export default Search;
