const React = require('react');

export default class ImageSlider extends React.Component {

	constructor(){
		super();
		this.state = {
      currentSlideIndex: 0
    }
	}

  render() {
 
    return (
    	<div>
      	<h1>I am on slide {this.state.currentSlideIndex}</h1>  
      </div>
    );
  }
}

module.exports = ImageSlider;