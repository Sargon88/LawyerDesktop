import React from "react";
import Tests from "../../components/Tests";
import Query from "../../components/Query";
import TESTS_QUERY from "../../queries/tests/tests";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={TESTS_QUERY}>
            {({ data: { tests } }) => {
              return <Tests tests={tests} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;