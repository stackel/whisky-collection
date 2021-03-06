import React from 'react';
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
    return <MenuItem key={field.value} value={field.value}>{field.name}</MenuItem>
  })

  return (
    <Select className="w-100" value={sortBy} onChange={onChange}>
      {fieldComponents}
    </Select>
  );
}
