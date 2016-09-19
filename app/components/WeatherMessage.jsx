var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, cityName} = this.props;
//
//       return (
//         <p>It is {temp} in {cityName}.</p>
//       );
//   }
// });

var WeatherMessage = (props) => {
    var {temp, cityName} = props;
    return (
      <p>It is {temp} in {cityName}. And I am a stateless component</p>
    );
}

module.exports = WeatherMessage;
