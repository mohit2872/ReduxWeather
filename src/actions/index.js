import Axios from 'axios'

const url = "http://api.apixu.com/v1/forecast.json?key=4a3a2dfea29e458b931185952172906&q=";

export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city){
  const name = city;
  const request = Axios.get(url+name);
  console.log("Request: ",request);

  return{
    type: FETCH_WEATHER,
    payload: request,
  }
}
