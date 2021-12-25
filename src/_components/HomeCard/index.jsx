import React from 'react';


function HomeCard({ logo, title, description }) {
  return (
      <div className="feature-item">
        <img src={ logo } alt={ `${ logo } Icon` } className="feature-icon" />
        <h3 className="feature-item-title">{ title }</h3>
        <p>
          { description }
        </p>
      </div>
  );
}

export default HomeCard;