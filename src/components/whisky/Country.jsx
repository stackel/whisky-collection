import React from 'react';

export default function Country({country, large}) {
  let classes = "sans-serif dark-gray "
  classes += large ? "f3 " : "f5 "

  if(!country) {
    country = "Country Missing"
  }

  return (
    <h1 className={classes}>{country}</h1>
  );
}
