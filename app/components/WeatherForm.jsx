var React = require('react');

var WeatherForm = React.createClass({
  onWeatherSubmit: function(e){
    e.preventDefault();
    var weatherLocation = this.refs.location.value;
    if(weatherLocation.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(weatherLocation);
    }
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.onWeatherSubmit}>
          <input type="text" ref="location" />
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
