import React from 'react';
import Reflux from 'reflux';
import BusinessCard from '../widgets/BusinessCard.jsx';

const BusinessList = React.createClass({
	//render the component
	render(){
		const businesses = this.props.businesses;
		var onClick = this.onClick;
		return(
			<ul className = "list-group">
					{businesses.map((business) =>
						<li className = "col-xs-4 list-group-item" key={business.id}>
			  			<BusinessCard className="col-xs-12" business= {business}/>
			  		</li>	
					)}
			</ul>
		)
	}
});

export default BusinessList;