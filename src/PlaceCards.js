import React, { Component } from 'react'

class PlaceCards extends Component {
    render() {
        const { placesData, removePlace } = this.props
        return(
            <PlaceBody placeData={placesData} removePlace={removePlace}/>
        )
    }
}

const PlaceBody = props => {
    const newPlaceCard = props.placeData.map((place, index) => {
        return(
            <div key={index} className="placeCard">
                <button 
                    className="deleteButton"
                    onClick={()=> props.removePlace(index)}>X</button>
                <h4 className="neighborhood">{place.neighborhood}</h4>
                <p className="placeName">{place.name}</p>
                <p className="placeDetails">{place.details}</p>
            </div>
            )
        })
    
    return <div className="main2">{newPlaceCard}</div> 
}

export default PlaceCards