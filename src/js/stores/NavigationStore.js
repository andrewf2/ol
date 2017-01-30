import Reflux from 'reflux';
import NavigationActions from '../actions/NavigationActions.js';
import { browserHistory } from 'react-router';

const NavigationStore = Reflux.createStore({
	listenables: NavigationActions,
	//this will redirect to whatever URL is passed in
	onGoTo(url) {
		browserHistory.push(url);
	}
	
});

export default NavigationStore;