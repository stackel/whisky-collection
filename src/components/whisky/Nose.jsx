import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Nose({nose, edit, onChange}) {
  let classes = "sans-serif f6 w-100"
  if (edit) {
    return <TextField
      label="Nose"
      multiline
      rowsMax="4"
      value={nose}
      onChange={onChange}
      className={classes}/>
  } else {
    return (<p className={classes}>{nose}</p>);
  }
}
