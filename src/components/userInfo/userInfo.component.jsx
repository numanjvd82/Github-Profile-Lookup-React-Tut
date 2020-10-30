import React, { useEffect } from 'react';
import './userInfo.styles.scss';
import Spinner from '../layout/spinner';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserInfo = ({ user, loading, getUser, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  } = user;
  if (loading) return <Spinner />;
  return (
    <div className="user-container">
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
        <br />
        <span>Followers: {followers}</span>
        <br />
        <span>Following: {following}</span>
        <br />
        <span>Public Gists: {public_gists}</span>
        <br />
        <span>Public Repos: {public_repos}</span>
        <br />
        Hireable: {''}
        {hireable === true ? (
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
};

UserInfo.propTypes = {
  loading: propTypes.bool,
  user: propTypes.object.isRequired,
  getUser: propTypes.func.isRequired,
};

export default UserInfo;
