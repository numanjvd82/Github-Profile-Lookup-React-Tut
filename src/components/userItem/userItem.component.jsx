import React from 'react';
import propTypes from 'prop-types';
import './userItem.styles.scss';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="user-item">
      <div className="user-content">
        <img src={avatar_url} alt="Github Avatar" className="user-img" />
        <h2>{login}</h2>
        <Link to={`/user/${login}`} className="profile-link">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItem;
