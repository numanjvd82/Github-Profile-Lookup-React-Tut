import React from 'react';
import './userInfo.styles.scss';
import Spinner from '../layout/spinner';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: propTypes.bool,
    user: propTypes.object.isRequired,
    getUser: propTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <div className="user-container">
        <Link to="/" className="back-to-search btn">
          Back to Search
        </Link>
        <div className="user-img">
          <img src={avatar_url} alt="User" className="img" />
        </div>
        <div className="user-content">
          <h1>{name}</h1>
          <h3>Github Username: {login}</h3>
          <a href={html_url} className="btn github-link">
            Github Profile
          </a>
          <br />
          <span>Location: {location}</span>
          <br />
          {blog ? (
            <a href={blog} className="btn github-link">
              {blog}
            </a>
          ) : (
            <React.Fragment />
          )}
          <span>Followers: {followers}</span>
          <br />
          <span>Following: {following}</span>
          <br />
          <span>Public Gists: {public_gists}</span>
          <br />
          <span>Public Repos: {public_repos}</span>
          <br />
          Hireable: {''}
          {hireable ? (
            <i className="fas fa-check" />
          ) : (
            <i className="fas fa-times-circle" />
          )}
          {bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default UserInfo;
