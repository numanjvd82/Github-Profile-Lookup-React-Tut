import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <h1>About Me!</h1>
      <p>
        I made this Github Profile Lookup App as a tutorial project to learn the
        fundamentels of React. If this Project Helped you in any way. Give me a
        Follow on My Github.
        <a
          style={{
            textDecoration: 'none',
            color: 'black',
            display: 'inline-block',
            margin: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
            borderBottom: '1px solid black',
            width: '100%',
          }}
          href="https://github.com/numanjvd82"
        >
          My Github Profile
        </a>
      </p>
    </React.Fragment>
  );
};

export default About;
