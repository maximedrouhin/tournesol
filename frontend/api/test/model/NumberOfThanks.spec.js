/**
 * Tournesol API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TournesolApi);
  }
}(this, function(expect, TournesolApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TournesolApi.NumberOfThanks();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NumberOfThanks', function() {
    it('should create an instance of NumberOfThanks', function() {
      // uncomment below and update the code to test NumberOfThanks
      //var instane = new TournesolApi.NumberOfThanks();
      //expect(instance).to.be.a(TournesolApi.NumberOfThanks);
    });

    it('should have the property nThanks (base name: "n_thanks")', function() {
      // uncomment below and update the code to test the property nThanks
      //var instane = new TournesolApi.NumberOfThanks();
      //expect(instance).to.be();
    });

  });

}));
