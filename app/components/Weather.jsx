var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  render: function(){
    var {isLoading, temperature, city, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temperature && city) {
        return <WeatherMessage cityName={city} temp={temperature}/>;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  },
  componentDidMount: function(){
    //First location is part of react router
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },
  handleSearch: function(cityName){
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })
    var that = this;
    openWeatherMap.getTemp(cityName).then(function(temp){
      that.setState({
        city: cityName,
        temperature: temp,
        isLoading: false,
      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
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
