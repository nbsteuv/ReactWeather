var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h2>About Component</h2>
//     )
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built with React</p>
      <p>Tools used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a></li>
        <li><a href="http://openweathermap.org">Open Weather Map API</a></li>
      </ul>
    </div>
  )
};

module.exports = About;
