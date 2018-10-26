import React from 'react';

export default function Name({name, large}) {
  let classes = "sans-serif "
  classes += large ? "f3 " : "f4 "

  if(!name) {
    name = "Name Missing"
  }

  return (
    <h1 className={classes}>{name}</h1>
  );
}
