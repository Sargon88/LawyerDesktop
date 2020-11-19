import React from "react";
import Card from "../Card";

const Tests = ({ tests }) => {
  const leftTestsCount = Math.ceil(tests.length / 5);
  const leftTests = Tests.slice(0, leftTestsCount);
  const rightTests = Tests.slice(leftTestsCount, tests.length);

  return (
    <div>
      questo!!!!!!!
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftTests.map((test, i) => {
            return <Card test={test} key={`test__${test.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightTests.map((test, i) => {
              return <Card test={test} key={`test__${test.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;