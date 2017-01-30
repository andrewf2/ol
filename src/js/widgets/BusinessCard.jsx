import BusinessActions from '../actions/BusinessActions.js';
import React from 'react';
import Reflux from 'reflux';
import NavigationActions from '../actions/NavigationActions.js';

const BusinessCard = React.createClass({
	//takes user to viewBusinessDetails state
	onClick(business){
		BusinessActions.viewBusiness(business.id);
		NavigationActions.goTo('/businesses/'+business.id)
	},
	//render the component
	render(){
		const business = this.props.business;
		var onClick = this.onClick;
		return(
        <div className="col-xs-12">
          <h6>{business.name}</h6>
            <button className="btn btn-primary" type="button" onClick = {onClick.bind(null,business)}>View Details</button>
        </div>
		)
	}
});

export default BusinessCard;
