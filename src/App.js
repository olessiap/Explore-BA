import React, { Component } from 'react'
import Form from './Form.js'
import PlaceCards from './PlaceCards.js'
import './style.css'

class App extends Component {
  state = {
    places: [
      {
          neighborhood: 'San Telmo',
          name: 'Berlina Bunker',
          details: 'warehouse bar with ping pong, games, food and a skate park',
        },
        {
            neighborhood: "Almagro",
            name: "Ladran",
            details: "LGBT live cumbia music bar and restaurant with outside area."
          },
          {
            neighborhood: "Palermo",
            name: "Input",
            details: "Best party to go to on a Weds night with drag queens! Line gets long fast so get there no later than 12:15 or you'll wait forever"
          }
    ]
  }
      // {
      //   neighborhood: 'San Telmo',
      //   name: 'Berlina Bunker',
      //   details: 'warehouse bar with ping pong, games, food and a skate park',
      // },
      // {
      //   neighborhood: "Almagro",
      //   name: "Ladran",
      //   details: "LGBT live cumbia music bar and restaurant with outside area."
      // },
      // {
      //   neighborhood: "Palermo",
      //   name: "Input",
      //   details: "Best party to go to on a Weds night with drag queens! Line gets long fast so get there no later than 12:15 or you'll wait forever"
      // }
  
  removePlace = index => {
    const { places } = this.state

    this.setState({
      places: places.filter((place, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = place => {
    this.setState({
      places:[...this.state.places, place]
    })
  }

  render() {
    const { places } = this.state
    return(
      <div className="main">
        <Form handleSubmit={this.handleSubmit} />
        <PlaceCards placesData={places} removePlace={this.removePlace} />
      </div>
      
    )
  }
}

export default App;