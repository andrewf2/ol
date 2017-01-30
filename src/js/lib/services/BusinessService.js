import RestService from './RestService';
import businessServiceMock from '../../../../mocks/businessServiceMock';

//comment either line out to toggle between live data and mockData

const BusinessService = RestService('businesses');

//const BusinessService = businessServiceMock;

export default BusinessService;