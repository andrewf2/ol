import React from 'react';
import Reflux from 'reflux';
import BusinessActions from '../actions/BusinessActions.js';

const PaginationLinks = React.createClass({
	 //will call next page action to let businessStore to get a new page of busniesses from the web service
  nextPage(){
    BusinessActions.nextPage();
  },
  //will call back page action to let businessStore to get the previous page of busniesses from the web service 
  goBack(){
    BusinessActions.goBack();
  },

	render(){
		return(
			<div>
				<div className="col-md-2">
	        <button className="btn btn-primary" type="button" onClick = {this.goBack}>
	          Previous Page
	        </button>
	      </div>
	      <div className="col-md-8"></div>
	      <div className="col-md-2">
	        <button className="btn btn-primary" type="button" onClick = {this.nextPage}>
	          Next Page
	        </button>
	      </div>
      </div>
		)
	}
	
});

export default PaginationLinks;