import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Home from './components/home.jsx';
import BusinessView from './components/BusinessView.jsx';
import BusinessIndex from './components/BusinessIndex.jsx';

const HomeRouter = React.createClass({
	render() {
		return(
			<Router history={browserHistory}>
				<Route path="/" component={Home}>
					<IndexRoute component={BusinessIndex} />
					<Route path="/businesses" component={BusinessIndex} />
					<Route path="/businesses/:id" component={BusinessView} />
				</Route>
			</Router>
		);
	}
});

export default HomeRouter;