import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Finish({finish, edit, onChange}) {
  let classes = "sans-serif f6 w-100"
  if (edit) {
    return <TextField
      label="Finish"
      multiline
      rowsMax="4"
      value={finish}
      onChange={onChange}
      className={classes}/>
  } else {
    return (<p className={classes}>{finish}</p>);
  }
}
