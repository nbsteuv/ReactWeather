var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  render: function(){
    var {isLoading, temperature, city} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      } else if(temperature && city) {
        return <WeatherMessage cityName={city} temp={temperature}/>;
      }
    }

    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  },

  handleSearch: function(cityName){
    this.setState({
      isLoading: true
    })
    var that = this;
    openWeatherMap.getTemp(cityName).then(function(temp){
      that.setState({
        city: cityName,
        temperature: temp,
        isLoading: false,
      });
    }, function(errorMessage){
      alert(errorMessage);
      that.setState({
        isLoading: false
      });
    });
  },

  getInitialState: function(){
    return {
      isLoading: false,
      city: 'Miami',
      temperature: 80
    }
  }
})

module.exports = Weather;
