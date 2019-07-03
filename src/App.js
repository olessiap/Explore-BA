import React, { Component } from 'react'
import PlaceCards from './PlaceCards.js'
import './style.css'

class App extends Component {
  render() {
    const places = [
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
    return(
      <div className="main">
        <PlaceCards placesData={places}/>
      </div>
      
    )
  }
}

export default App;