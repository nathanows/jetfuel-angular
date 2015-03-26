'use strict';

describe('Service: jetfuelAPIService', function () {

  // load the service's module
  beforeEach(module('jetfuelAngularApp'));

  // instantiate service
  var jetfuelAPIService;
  beforeEach(inject(function (_jetfuelAPIService_) {
    jetfuelAPIService = _jetfuelAPIService_;
  }));

  it('should do something', function () {
    expect(!!jetfuelAPIService).toBe(true);
  });

});
