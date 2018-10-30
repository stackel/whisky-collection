import React from 'react'
import _ from 'underscore'

import List from 'components/list/List'
/*import Sort from 'components/list/sort/Sort'*/
import Search from 'components/list/search/Search'
import Filter from 'components/list/filter/Filter'

class ListWithControls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: "name",
      listItemsDisplay: _.clone(props.listItems),
      query: ""
    }
  }

  /*sortByUpdated = (event) => {
    const value = event.target.value
    this.setState({
      sortBy: value,
      listItemsDisplay: this.state.listItemsDisplay.sort(
        (a, b) => a.name.localeCompare(b.name)
      ).sort((a, b) => a[value].localeCompare(b[value]))
    })
  }*/

  queryUpdated = (event) => {
    const query = event.target.value
    this.setState({
      query: query,
      listItemsDisplay: this.props.listItems.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })
    })
  }

  filterUpdated = (filters) => {
    let hits = _.clone(this.props.listItems)

    for (var i = 0; i < filters.length; i++) {
      const concept = filters[i]

      let listFiltered = hits.filter(obj => {
        return (concept.value.toLowerCase() === obj[concept.field].toLowerCase())
      })

      hits = listFiltered;
    }

    this.setState({
      listItemsDisplay: hits
    })
  }

  render() {
    return (
      <div>
        <div className="mv3">
          <Filter filters={[]} onChange={this.filterUpdated}/>
        </div>
        <div className="mv3">
          <Search query={this.state.query} onChange={this.queryUpdated}/>
        </div>
        <List listItems={this.state.listItemsDisplay}/>
      </div>
    )
  }
}

export default ListWithControls
