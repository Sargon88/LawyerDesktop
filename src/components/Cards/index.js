import React from "react";
import { Link } from "react-router-dom";

const Card = ({ test }) => {
  return (
    <Link to={`/test/${test.id}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted"> 
        <div className="uk-card-body">
          <p id="test" className="uk-text-uppercase">          
            {test.test_relazione !== null ? test.test_relazione.nome : ""}
          </p>
          <p id="title" className="uk-text-large">
            {test.nome}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;