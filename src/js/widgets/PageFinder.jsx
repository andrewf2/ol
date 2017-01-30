import React from 'react';
import Reflux from 'reflux';
import BusinessActions from '../actions/BusinessActions.js';

const PageFinder = React.createClass({
	getInitialState(){
		return {pageNum:'',error:null, buttonState:'btn btn-primary'}; 
	},

	handleChange: function(e) {
		const val = e.target.value;
		if(val <= 1000){
			this.setState({ pageNum: val, error:null,buttonState:'btn btn-primary' });
		}
		else{
			this.setState(
				{
				pageNum:'',
				error:"Page limit exceeded!, input may not exceed 1000!",
				buttonState:'btn btn-primary disabled'
				}
			)
		}    
  },

	navToPage(){
		BusinessActions.navTo(this.state.pageNum);
	},

	render(){
		return(
			<div id="pageFinder">
				Search for Page:
				<input type="number" onChange = {this.handleChange}  
					placeholder="example: 456" />
				<div>{this.state.error}</div>
				<button className= { this.state.buttonState} type="button" onClick = {this.navToPage}>
				  Find Page
        </button>
			</div>
		)
	}
});

export default PageFinder;