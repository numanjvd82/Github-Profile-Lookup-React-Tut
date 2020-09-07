import React from 'react';

class UserInformation extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
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
    return (
      <div>
        <h1>{bio}</h1>
        <h2>{blog}</h2>
      </div>
    );
  }
}

export default UserInformation;