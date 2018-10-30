import React from 'react';
import TextField from '@material-ui/core/TextField'

export default function Search({query, onChange}) {
  return (
    <TextField
      label="Search"
      className="w-100"
      defaultValue={query}
      onChange={onChange}
    />
  );
}
