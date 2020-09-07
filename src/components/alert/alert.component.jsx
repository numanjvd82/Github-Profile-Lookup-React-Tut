import React from 'react';
import './alert.styles.scss';

const Alert = ({ alert }) => {
  return (
    alert != null && (
      <div className="alert">
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
