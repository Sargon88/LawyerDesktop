import React from "react";
import { useParams } from "react-router";
import Tests from "../../components/Tests";
import Query from "../../components/Query";
import CATEGORY_TESTS_QUERY from "../../queries/test-relation/tests";

const TestRelazione = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_TESTS_QUERY} id={id}>
      {({ data: { testRelazione } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{testRelazione.name}</h1>
                <Tests tests={testRelazione.tests} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default TestRelazione;