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
                <h1 className="placeName">{place.name}</h1>
                <h4 className="neighborhood">{place.neighborhood}</h4>
                <p className="placeDetails">{place.details}</p>
                <div className="delete-div">
                    <button 
                        className="deleteButton"
                        onClick={()=> props.removePlace(index)}>X</button>
                </div>
                
            </div>
            )
        })
    
    return <div className="main2">{newPlaceCard}</div> 
}

export default PlaceCards