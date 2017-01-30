import BusinessStore from '../stores/BusinessStore';
import BusinessActions from '../actions/BusinessActions.js';
import NavigationActions from '../actions/NavigationActions.js';
import React from 'react';
import Reflux from 'reflux';

const BusinessView = React.createClass({

  mixins: [Reflux.connect(BusinessStore, 'business')],

  //call the action to go back to index and get the page of businesses from web service
  onClick(id){
    BusinessActions.returnToIndex();
    NavigationActions.goTo('/');
  },

  render: function() {
    if(this.state.business){
      const business = this.state.business;
      return (
        <div className = "container well">
          <div className = 'col-md-8'>
            <h4>{business.name}</h4>
            <p>ID: {business.id}</p>
            <p>UUID: {business.uuid}</p>
            <p>Address: {business.address}</p>
            <p>Address 2: {business.address2}</p>
            <p>Zip: {business.zip}</p>
            <p>Country: {business.country}</p>
            <p>Phone: {business.phone}</p>
            <p>Website: <a href = {business.website}>{business.website}</a></p>
            <p>Date Accquired: {business.created_at}</p>
          </div>
          <button className = "btn btn-primary" 
            type = "button" 
            onClick = {this.onClick.bind(null,business.id)}>
            Go Back
          </button>
        </div>
      );
    } else {
        return(<div>Fail</div>);
    }
  }
});

export default BusinessView

