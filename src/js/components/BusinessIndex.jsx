import Reflux from 'reflux';
import React from 'react';
import PaginationLinks from '../widgets/PaginationLinks.jsx'
import BusinessList from '../widgets/BusinessList.jsx';
import BusinessStore from '../stores/BusinessStore'
import SearchBar from '../widgets/SearchBar.jsx';
import PageFinder from '../widgets/PageFinder.jsx';

const BusinessIndex = React.createClass({
  mixins: [Reflux.connect(BusinessStore, 'businesses')],
  //get the current state of business store
  getInitialState(){
    return BusinessStore.state;
  },

  render(){
    if(this.state.businesses.length && this.state.businesses.length > 0){
      var businesss = this.state.businesses;
      return (
        <div className="row col-md-12">
          <PageFinder/>
          <br/>
          <div className="row col-md-12">
            <SearchBar businesses = {this.state.businesses}/>
            <br/>
          </div>
          <PaginationLinks/>
          <BusinessList businesses = {this.state.businesses}/>
        </div>
      )
    } else {
        if(this.state.error){
          return(<div>{this.state.error}</div>)
        }
        return(<div>Retrieving data from Server</div>)    
    }
  }
});

export default BusinessIndex;