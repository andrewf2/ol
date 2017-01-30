var businesses = require('./businesses.js');

module.exports = {
   getPage: function(){
      return new Promise(function(resolve,reject){
         window.setTimeout(function(){
            resolve({status:200,data:businesses})
         },1000)
      })
   }
}