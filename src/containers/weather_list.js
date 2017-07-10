import React from 'react'
import {connect} from 'react-redux'
import {Sparklines, SparklinesLine} from 'react-sparklines'
import Chart from '../components/chart'
import GoogleMap from '../components/google_maps'

class WeatherList extends React.Component{
  constructor(props){
    super(props)
  }

  renderWeather(cityData){
    const name = cityData.location.name;
    const temps = cityData.forecast.forecastday[0].hour.map(weather => (weather.temp_c));
    const pressures = cityData.forecast.forecastday[0].hour.map(weather => (weather.pressure_mb));
    const humidities = cityData.forecast.forecastday[0].hour.map(weather => (weather.humidity));
    const latitude = cityData.location.lat;
    const longitude = cityData.location.lon;
    console.log(typeof temps)

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={latitude} lng={longitude} name={name}/>
        </td>
        <td><Chart data={temps} color="red" units="celcius"/></td>
        <td><Chart data={pressures} color="blue" units="mb"/></td>
        <td><Chart data={humidities} color="purple" units="%"/></td>
      </tr>
    )
  }

  render(){
    return(
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList)
