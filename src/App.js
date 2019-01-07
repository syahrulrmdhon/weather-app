import React, { Component } from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Cuaca from './components/Cuaca';

import './App.css';

const API_KEY = ("407353b415c4d164751653261c13fecc");

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      cityID: '',
      main: [

      ],
      cityName: '',
      error: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    let id = e.target.value;
    if(id) {
      this.setState({
        cityID: id
      })
    }
  }

  getCuaca = async (e) => {
    e.preventDefault();
    const cityID = this.state.cityID; 
    // const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${API_KEY}&units=metric&cnt=5`);
    const data = await api_call.json();

    console.log(data);

    if (cityID) {

      this.setState({
        main: data.list,
        cityName: data.city,
        error: ''
      });

    } else {

      this.setState({
        main: [],
        cityName: '',
        error: data.message
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
                  <Form getCuaca={this.getCuaca} handleChange={this.handleChange}/>
                  <Cuaca 
                    main = {this.state.main}
                    cityName = {this.state.cityName}
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