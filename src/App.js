import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Cuaca from './components/Cuaca';

import './App.css';

const API_KEY = ("407353b415c4d164751653261c13fecc");

class App extends Component {

  state = {
    tempratur: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getCuaca = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    console.log(data);

    if (city && country) {

      this.setState({
        temprature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ""
      });

    } else {

      this.setState({
        temprature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : data.message
      });

    }
  }

  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-5 title-container'>
                  <Titles/>
                </div>
                <div className='col-sm-7 form-container'>
                  <Form getCuaca={this.getCuaca}/>
                  <Cuaca 
                    temprature = {this.state.temprature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;