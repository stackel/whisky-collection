import React from 'react';

export default function Temp({ temp: { name, type, county }}) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
