var React = require('react');
var {Link, IndexLink} = require('react-router');


  //Need IndexLink to prevent Get Weather from appearing active at all times.

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var navLocation = this.refs.navLocation.value;
    if(navLocation && navLocation.length > 0){
      //Use url encoding to prevent invalid characters
      var encodedLocation = encodeURIComponent(navLocation);
      this.refs.navLocation.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function(){
    return (
     <div className="top-bar">
       <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather App</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
              <input type="search" placeholder="Search Weather" ref="navLocation"/>
            </li>
            <li>
              <input type="submit" className="button" value="Get Weather" />
            </li>
          </ul>
        </form>
      </div>
    </div>
    );
  }
});

//Label class 'className' so that there is no conflict with React


// var old = {
//   <div>
//     <h2>Nav Component</h2>
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//     <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//     <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//   </div>
// };

module.exports = Nav;
