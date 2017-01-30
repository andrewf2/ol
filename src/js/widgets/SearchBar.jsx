import React from 'react';
import Reflux from 'reflux';
import BusinessActions from '../actions/BusinessActions.js';

const SearchBar = React.createClass({
	//default the search to empty
	getInitialState(){
		return { searchString: '',businesses:this.props.businesses};
	},
	//as keys are pressed, it will filter the state and emit the change
	filterFor(e){
		this.setState({searchString:e.target.value,businesses:this.props.businesses});
    const searchTerm = this.state.searchString.trim().toLowerCase();
    if(searchTerm.length > 0){
      var results = this.props.businesses.filter(function(business){
        return business.name.toLowerCase().match(searchTerm);
      })
    }
    BusinessActions.emit(results);
  },

	render(){
		const businesses = this.props.businesses;
		return(
			<div id="searchbar">
				Filter:
				<input type="text" value={this.state.searchString} onChange={this.filterFor} placeholder="Type here" />
			</div>
		)
	}
});

export default SearchBar;