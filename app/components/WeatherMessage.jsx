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
      <h3 className="text-center">It is {temp} in {cityName}.</h3>
    );
}

module.exports = WeatherMessage;
