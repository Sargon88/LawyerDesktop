import React from "react";
import { Link } from "react-router-dom";

const Card = ({ test }) => {
  return (
    <Link to={`/test/${test.id}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted"> 
        <div className="uk-card-body">
          <p id="test" className="uk-text-uppercase">          
            {test.test !== null ? test.test : ""}
          </p>
          <p id="title" className="uk-text-large">
            {test.test}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;