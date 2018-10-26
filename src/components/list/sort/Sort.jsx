import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function Sort({sortBy, onChange}) {
  const fields = [
    {
      name: "Name",
      value: "name"
    },
    {
      name: "Cost",
      value: "cost"
    },
    {
      name: "Class",
      value: "class"
    },
    {
      name: "Country",
      value: "country"
    },
    {
      name: "Type",
      value: "type"
    }
  ]

  const fieldComponents = fields.map(field => {
    return <MenuItem value={field.value}>{field.name}</MenuItem>
  })

  return (
    <Select value={sortBy} onChange={onChange}>
      {fieldComponents}
    </Select>
  );
}
