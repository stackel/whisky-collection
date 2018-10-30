import React, {Component} from 'react';

import data from './data.json'

import ListWithControls from 'components/list/ListWithControls'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div className="mw6 center">
        <ListWithControls listItems={this.state.data}/>
      </div>
    )
  }
}

export default App;
