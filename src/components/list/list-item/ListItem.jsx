import React from 'react';
import MaterialListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';

export default function ListItem({whisky, checkbox, checked, onCheckboxChange}) {
  const secondaryText = whisky.type + " - " + whisky.country + " - " + whisky.cost +
      " - " + whisky.class

  const ListItemCheckBox = (props) => {
    if (!props.show) {
      return null
    }

    return (
      <ListItemSecondaryAction>
        <Checkbox defaultChecked={checked} onChange={onCheckboxChange}/>
      </ListItemSecondaryAction>
    )
  }

  return (
    <MaterialListItem disableGutters button component="a" href={"/" + whisky.name}>
      <ListItemText primary={whisky.name} secondary={secondaryText}></ListItemText>
      <ListItemCheckBox show={checkbox}/>
    </MaterialListItem>
  );
}
