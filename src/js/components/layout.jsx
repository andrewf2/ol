import React from 'react';
import Reflux from 'reflux';
import AppBar from 'material-ui/lib/app-bar';
import NavigationStore from '../stores/NavigationStore';

const Layout = React.createClass({

	render(){
		return(
			<div className="container">
				{this.props.children}
			</div>
		)
	}
})

export default Layout;