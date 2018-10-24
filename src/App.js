import React, {Component} from 'react';

import data from './data.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      data: data,
      filteredData: data
    }
  }

  handleSearchQueryChange = (event) => {
    this.setState({searchQuery: event.target.value});

    this.setState({
      filteredData: this.state.data.filter(obj => {
        return obj.Whisky.toLowerCase().includes(event.target.value.toLowerCase())
        || obj.Type.toLowerCase().includes(event.target.value.toLowerCase())
        || obj.Class.toLowerCase().includes(event.target.value.toLowerCase())
        || obj.Country.toLowerCase().includes(event.target.value.toLowerCase())
      })
    })
  }

  render() {
    const data = this.state.filteredData;

    let listItemComponents = []
    for (var i = 0; i < data.length; i++) {
      const whisky = data[i];
      listItemComponents.push(
        <div className="sans-serif" key={whisky.Whisky}>
          <h2 className="f4">{whisky.Whisky}</h2>
          <h3 className="f5 gray">{whisky.Type} from {whisky.Country}</h3>
        </div>
      )
    }
    return (
      <div className="mw10 ph3 ba">
        <header>
          <h1 className="sans-serif f2">Whisky App</h1>
        </header>
        <input onChange={this.handleSearchQueryChange}></input>
        {listItemComponents}
      </div>
    );
  }
}

export default App;
