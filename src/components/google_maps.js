import React from 'react'

export default class GoogleMap extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    new google.maps.Map(this.refs.map,
    {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 12
    })
  }

  render(){
    return(
      <div ref="map"></div>
    );
  }
}
