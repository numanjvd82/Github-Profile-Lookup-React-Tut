import React from 'react';
import UserItem from '../userItem/userItem.component';
import './users.styles.scss';
import propTypes from 'prop-types';
import Spinner from '../layout/spinner';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="users">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
};

export default Users;
