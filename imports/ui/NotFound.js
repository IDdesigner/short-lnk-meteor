import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'; 

export default () => {
  return (
    <div className="boxed-view">
        <div className="boxed-view_box">
          <h1>Page Not Found</h1>
          <p>Hmmmm, we're unable to find that page.</p>
          <Link to="/" className="button button--link">Head Home</Link>
        </div>
      </div>
  );
}