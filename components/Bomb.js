const React = require('react');

export default class Bomb extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			secondsLeft: props.initialCount
		}
	}

  render() {
 		if (this.state.secondsLeft) {
	    return (
	      <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
	    )
  	} else {
  		return (
  			<h1>Boom!</h1>
  		)
  	}
  }
};

Bomb.defaultProps = {
	initialCount: 120
};

Bomb.propTypes = {
	initialCount: React.PropTypes.number
};

module.exports = Bomb;