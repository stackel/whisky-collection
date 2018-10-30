import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import '../index.css';

import whiskyList from 'data.json'
import Name from 'components/whisky/Name'
import Type from 'components/whisky/Type'
import Country from 'components/whisky/Country'
import Nose from 'components/whisky/Nose'
import Palate from 'components/whisky/Palate'
import Finish from 'components/whisky/Finish'
import Rating from 'components/whisky/Rating'
import ListItem from 'components/list/list-item/ListItem'
import List from 'components/list/List'
import ListWithControls from 'components/list/ListWithControls'
import Sort from 'components/list/sort/Sort'
import Search from 'components/list/search/Search'
import Filter from 'components/list/filter/Filter'

//export const whisky = whiskyList[0]

export const whisky = {
  name: "2 Gingers Irish Whiskey",
  cost: "$$",
  class: "Scotch-like",
  country: "Ireland",
  type: "Blend",
  nose: "Caramel",
  palate: "Smoke",
  finish: "Cinnamon"
}

export const actions = {
  onNoseChange: action('onNoseChange'),
  onPalateChange: action('onPalateChange'),
  onFinishChange: action('onFinishChange'),
  onRatingChange: action('onRatingChange'),
  onCheckboxChange: action('onCheckboxChange'),
  onSortChange: action('onSortChange'),
  onSearchChange: action('onSearchChange'),
  onFilterChange: action('onFilterChange')
};

storiesOf('Whisky', module).add('Name', () => <Name name={whisky.name}/>).add(
  'Name (Large)',
  () => <Name name={whisky.name} large="large"/>
).add('Type', () => <Type type={whisky.type}/>).add(
  'Type (Large)',
  () => <Type type={whisky.type} large="large"/>
).add('Country', () => <Country country={whisky.country}/>).add(
  'Country (Large)',
  () => <Country country={whisky.country} large="large"/>
).add('Nose', () => <Nose nose={whisky.nose}/>).add(
  'Nose (edit)',
  () => <Nose nose={whisky.nose} edit="edit" onChange={actions.onNoseChange}/>
).add('Palate', () => <Palate palate={whisky.palate}/>).add(
  'Palate (edit)',
  () => <Nose nose={whisky.palate} edit="edit" onChange={actions.onPalateChange}/>
).add('Finish', () => <Finish finish={whisky.finish}/>).add(
  'Finish (edit)',
  () => <Finish finish={whisky.finish} edit="edit" onChange={actions.onFinishChange}/>
).add('Rating', () => <Rating rating={whisky.rating}/>).add(
  'Rating (edit)',
  () => <Rating rating={whisky.rating} edit="edit" onChange={actions.onRatingChange}/>
);

storiesOf('List', module).add('ListItem', () => <ListItem whisky={whisky}/>).add(
  'ListItem (With checkbox)',
  () => <ListItem
    whisky={whisky}
    checkbox
    checked={true}
    onCheckboxChange={actions.onCheckboxChange}/>
)
.add('List', () => <List listItems={whiskyList}/>)
.add('Sort', () => <Sort sortBy={"name"} onChange={actions.onSortChange}/>)
.add('Search', () => <Search query="" onChange={actions.onSearchChange}/>)
.add('Filter', () => <Filter onChange={actions.onFilterChange}/>)
.add('ListWithControls', () => <ListWithControls listItems={whiskyList}/>)
;
