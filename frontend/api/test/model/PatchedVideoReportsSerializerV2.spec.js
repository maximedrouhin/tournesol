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
    instance = new TournesolApi.PatchedVideoReportsSerializerV2();
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

  describe('PatchedVideoReportsSerializerV2', function() {
    it('should create an instance of PatchedVideoReportsSerializerV2', function() {
      // uncomment below and update the code to test PatchedVideoReportsSerializerV2
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be.a(TournesolApi.PatchedVideoReportsSerializerV2);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property video (base name: "video")', function() {
      // uncomment below and update the code to test the property video
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property explanation (base name: "explanation")', function() {
      // uncomment below and update the code to test the property explanation
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property bully (base name: "bully")', function() {
      // uncomment below and update the code to test the property bully
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property deathThreat (base name: "death_threat")', function() {
      // uncomment below and update the code to test the property deathThreat
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property hate (base name: "hate")', function() {
      // uncomment below and update the code to test the property hate
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property kid (base name: "kid")', function() {
      // uncomment below and update the code to test the property kid
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property misl0 (base name: "misl0")', function() {
      // uncomment below and update the code to test the property misl0
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property misl1 (base name: "misl1")', function() {
      // uncomment below and update the code to test the property misl1
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property misl2 (base name: "misl2")', function() {
      // uncomment below and update the code to test the property misl2
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property threat (base name: "threat")', function() {
      // uncomment below and update the code to test the property threat
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property troll (base name: "troll")', function() {
      // uncomment below and update the code to test the property troll
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property violence (base name: "violence")', function() {
      // uncomment below and update the code to test the property violence
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property violentAct (base name: "violent_act")', function() {
      // uncomment below and update the code to test the property violentAct
      //var instane = new TournesolApi.PatchedVideoReportsSerializerV2();
      //expect(instance).to.be();
    });

  });

}));
