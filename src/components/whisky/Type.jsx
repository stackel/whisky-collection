import React from 'react';

export default function Type({type, large}) {
  let classes = "sans-serif gray "
  classes += large ? "f3 " : "f5 "

  if(!type) {
    type = "Type Missing"
  }

  return (
    <h1 className={classes}>{type}</h1>
  );
}
