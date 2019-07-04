import React, { Component } from 'react'

class PlaceCards extends Component {
    render() {
        const { placesData } = this.props
        return(
            <PlaceBody placeData={placesData} />
        )
    }
}

const PlaceBody = props => {
    const newPlaceCard = props.placeData.map((place, index) => {
        return(
            <div key={index} className="placeCard">
                <h4>{place.neighborhood}</h4>
                <p className="placeName">{place.name}</p>
                <p>{place.details}</p>
            </div>
            )
        })
    
    return <div className="main2">{newPlaceCard}</div> 
}

export default PlaceCards