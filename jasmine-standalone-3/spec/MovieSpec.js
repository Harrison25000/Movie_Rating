'use strict';

describe ('Feature Test:', function() {
var apicall;

beforeEach(function () {
   apicall = new ApiCall();
});


it ('calls the api', function(){
 apicall.apistuff('bob')
 expect(apicall.test).toEqual(0)
});





});
