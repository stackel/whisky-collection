import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Rating({rating, edit, onChange}) {
  let classes = "sans-serif f6 w-100"
  if (edit) {
    return <TextField
      label="Rating"
      value={rating}
      onChange={onChange}
      className={classes}/>
  } else {
    return (<p className={classes}>{rating}</p>);
  }
}
