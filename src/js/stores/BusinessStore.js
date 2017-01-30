import BusinessActions from '../actions/BusinessActions';
import BusinessService from '../lib/services/BusinessService';
import Reflux from 'reflux';
import NavigationActions from '../actions/NavigationActions.js';

const BusinessStore = Reflux.createStore({
  //register a reflux listener to the business actions
	listenables: [BusinessActions],
  //reset the state and set the defaults on init()
  init(){
    this.state = {};
    this.pageNum = 1;
    this.isViewBusinessDetailsState = false;
    this.promises = {};
    
  },
  //if we arent in the view business details state, fetch the current page of businesses
  getInitialState(){
    if(!this.isViewBusinessDetailsState){
      this.getPage();
    }   
    return this.state;  
  },
  //increment the page number and get the next page of businesses, listens to nextPage action
  onNextPage() {
    this.pageNum++;
    this.getPage();
  },
  //decrement the page num and get previous page of businesses, listens to goBack action
  onGoBack(){
    this.pageNum--;
    this.getPage();
  },
  //when the state is changed from any component, listen for emit actionand emit the change
  onEmit(modifiedState){
    this.trigger(modifiedState);
  },
  getPage(){
    if(this.promises['pending'] == undefined || this.promises['pending'] == null){
      BusinessService.getPage(this.pageNum).then(this.onSuccess,this.onError);
      this.promises["pending"] = true;
    }    
  },
  //listens for viewBusiness action and sets the view details state to true and filters for the correct user
  onViewBusiness(id){
    if(this.state){
      this.isViewBusinessDetailsState = true;
      this.state = _.find(this.state, (business) => business.id == id);
      this.trigger(this.state);
    }else{
      BusinessService.find(id).then(this.onSuccess,this.onError);
    }
  },
  //listens to returnToIndex and gets the current page of businesses
  onReturnToIndex(){
    this.isViewBusinessDetailsState = false;
    this.getPage();
  },
  //listens for navTo action, get page based on user input
  onNavTo(pageNum){
    this.pageNum = pageNum;
    this.getPage();
  },

  //callbacks for asynchronous REST calls
  onSuccess(response){
    if(response.data && response.data.businesses && response.data.businesses.length > 0){
      this.state = response.data.businesses;
      this.promises["pending"] = null;
      this.trigger(this.state);
    } else {
      console.log('err')
      this.onError("resource does not exist");
    }
  },
  onError(err){
    this.state = "Could not load results:"
    this.trigger(this.state);
  }
});

export default BusinessStore;
