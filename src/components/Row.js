import { nanoid } from "nanoid";
import React from "react";
import Input from "./Input";
import Verb from "./Verb";

export default function Row(props) {
  const translation = (
    <Verb
      value={props.values[0]}
      hasIcon={true}
      setFavorites={props.setFavorites}
    />
  );

  let verbForms = [];
  if (props.isTesting) {
    verbForms = props.values
      .slice(1)
      .map((form) => <Input answer={form} key={nanoid()} />);
  } else {
    verbForms = props.values
      .slice(1)
      .map((form) => <Verb value={form} key={nanoid()} hasIcon={false} />);
  }

  return (
    <div className="row">
      {translation}
      {verbForms}
    </div>
  );
}
