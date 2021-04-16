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
    instance = new TournesolApi.PatchedVideoSerializerV2();
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

  describe('PatchedVideoSerializerV2', function() {
    it('should create an instance of PatchedVideoSerializerV2', function() {
      // uncomment below and update the code to test PatchedVideoSerializerV2
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be.a(TournesolApi.PatchedVideoSerializerV2);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property videoId (base name: "video_id")', function() {
      // uncomment below and update the code to test the property videoId
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property publicationDate (base name: "publication_date")', function() {
      // uncomment below and update the code to test the property publicationDate
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property views (base name: "views")', function() {
      // uncomment below and update the code to test the property views
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property uploader (base name: "uploader")', function() {
      // uncomment below and update the code to test the property uploader
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property scorePreferencesTerm (base name: "score_preferences_term")', function() {
      // uncomment below and update the code to test the property scorePreferencesTerm
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property scoreSearchTerm (base name: "score_search_term")', function() {
      // uncomment below and update the code to test the property scoreSearchTerm
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property ratingNExperts (base name: "rating_n_experts")', function() {
      // uncomment below and update the code to test the property ratingNExperts
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property ratingNRatings (base name: "rating_n_ratings")', function() {
      // uncomment below and update the code to test the property ratingNRatings
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property nReports (base name: "n_reports")', function() {
      // uncomment below and update the code to test the property nReports
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property publicExperts (base name: "public_experts")', function() {
      // uncomment below and update the code to test the property publicExperts
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property nPublicExperts (base name: "n_public_experts")', function() {
      // uncomment below and update the code to test the property nPublicExperts
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property nPrivateExperts (base name: "n_private_experts")', function() {
      // uncomment below and update the code to test the property nPrivateExperts
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property paretoOptimal (base name: "pareto_optimal")', function() {
      // uncomment below and update the code to test the property paretoOptimal
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property reliability (base name: "reliability")', function() {
      // uncomment below and update the code to test the property reliability
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property importance (base name: "importance")', function() {
      // uncomment below and update the code to test the property importance
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property engaging (base name: "engaging")', function() {
      // uncomment below and update the code to test the property engaging
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property pedagogy (base name: "pedagogy")', function() {
      // uncomment below and update the code to test the property pedagogy
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property laymanFriendly (base name: "layman_friendly")', function() {
      // uncomment below and update the code to test the property laymanFriendly
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property diversityInclusion (base name: "diversity_inclusion")', function() {
      // uncomment below and update the code to test the property diversityInclusion
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property backfireRisk (base name: "backfire_risk")', function() {
      // uncomment below and update the code to test the property backfireRisk
      //var instane = new TournesolApi.PatchedVideoSerializerV2();
      //expect(instance).to.be();
    });

  });

}));
