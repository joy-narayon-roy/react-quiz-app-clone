import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handelChange, input = true }) {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className="answer"
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handelChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`answer ${
                option.correct ? "correct" : option.checked ? "wrong" : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled={true}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
