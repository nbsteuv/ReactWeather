var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function(){
//     return (
//       <h2>Examples Component</h2>
//     )
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are some example locations to try out.</p>
      <ul>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = Examples;
