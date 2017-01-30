import axios from 'axios';

const RestService = (resource) => {
	return {
		all:_all,
		find:_find,
		create:_create,
		update:_update,
		destroy:_destroy,
		getPage:_getPage
	};

	function _all(){
		return axios.get(baseUrl + "/"+ resource).then(success,error);	
	};

	function _find(id){
		return axios.get(baseUrl+ "/" + resource + "/" + id).then(success,error);
	};

	function _getPage(pageNum){
		return axios.get(baseUrl+ "/" + resource + "/" + "?page=" + pageNum).then(success,error);
	};

	function _create(data){
		return axios.post(baseUrl + "/"+ resource, data).then(success,error);
	};

	function _update(id,data){
		return axios.put(baseUrl+ "/" + resource + "/" + id,data).then(success,error);
	};

	function _destroy(id){
		return axios.delete(baseUrl+ "/" + resource + "/" + id).then(success,error);
	};

	function success(res){
		return res;
	};

	function error(e){
		return e;
	};

};
export default RestService;