import React from 'react';
import MaterialList from '@material-ui/core/List';
import ListItem from 'components/list/list-item/ListItem';

export default function List({listItems}) {

  const ListItemComponents = listItems.map(item => {
    return <ListItem whisky={item}/>
  })

  return (
    <MaterialList>
      {ListItemComponents}
    </MaterialList>
  );
}
