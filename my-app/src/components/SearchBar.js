import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)

      this.state = {
          names: importedNames
      }
    
    }
    handleChange = (event) => {
      const inputText = event.target.value.toLowerCase()
      console.log(inputText)
      const filterdNames = importedNames.filter(name => {
        return name.toLowerCase().includes(inputText)
      })
      this.setState({
        names:filterdNames
      })

    }
  render() {
    return (
      <div>
        <h1>Name Search:</h1>
        <p>Matching names found:{this.state.names.length}</p>
        <form>
            <div>
                <input 
                type="text"
                placeholder='search names...'
                onChange={(event) => this.handleChange(event)}
                />
            </div>
            <div style={{margin: 'auto'}}>
                {this.state.names.map(name => {
                  return <p key={name}>{name}</p>
                })}
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar