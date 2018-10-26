import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Palate({palate, edit, onChange}) {
  let classes = "sans-serif f6 w-100"
  if (edit) {
    return <TextField
      label="Palate"
      multiline
      rowsMax="4"
      value={palate}
      onChange={onChange}
      className={classes}/>
  } else {
    return (<p className={classes}>{palate}</p>);
  }
}
