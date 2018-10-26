import React from 'react'
import _ from 'underscore'

import List from 'components/list/List'
import Sort from 'components/list/sort/Sort'

class ListWithControls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: "name",
      listItemsDisplay: _.clone(props.listItems)
    }
  }

  sortByUpdated = (event) => {
    const value = event.target.value

    this.setState({
      sortBy: value,
      listItemsDisplay: this.state.listItemsDisplay.sort(
        (a, b) => a[value].localeCompare(b[value]))
    })
  }

  render() {
    return (
      <div>
        <Sort sortBy={this.state.sortBy} onChange={this.sortByUpdated}/>
        <List listItems={this.state.listItemsDisplay}/>
      </div>
    )
  }
}

export default ListWithControls
