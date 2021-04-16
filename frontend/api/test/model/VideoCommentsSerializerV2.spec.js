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
    instance = new TournesolApi.VideoCommentsSerializerV2();
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

  describe('VideoCommentsSerializerV2', function() {
    it('should create an instance of VideoCommentsSerializerV2', function() {
      // uncomment below and update the code to test VideoCommentsSerializerV2
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be.a(TournesolApi.VideoCommentsSerializerV2);
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property video (base name: "video")', function() {
      // uncomment below and update the code to test the property video
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property parentComment (base name: "parent_comment")', function() {
      // uncomment below and update the code to test the property parentComment
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property datetimeLastedit (base name: "datetime_lastedit")', function() {
      // uncomment below and update the code to test the property datetimeLastedit
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property datetimeAdd (base name: "datetime_add")', function() {
      // uncomment below and update the code to test the property datetimeAdd
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property votesPlus (base name: "votes_plus")', function() {
      // uncomment below and update the code to test the property votesPlus
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property votesMinus (base name: "votes_minus")', function() {
      // uncomment below and update the code to test the property votesMinus
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property redFlags (base name: "red_flags")', function() {
      // uncomment below and update the code to test the property redFlags
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property children (base name: "children")', function() {
      // uncomment below and update the code to test the property children
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property datetimeAddAgo (base name: "datetime_add_ago")', function() {
      // uncomment below and update the code to test the property datetimeAddAgo
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property editedMAddedS (base name: "edited_m_added_s")', function() {
      // uncomment below and update the code to test the property editedMAddedS
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property reliability (base name: "reliability")', function() {
      // uncomment below and update the code to test the property reliability
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property pedagogy (base name: "pedagogy")', function() {
      // uncomment below and update the code to test the property pedagogy
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property importance (base name: "importance")', function() {
      // uncomment below and update the code to test the property importance
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property engaging (base name: "engaging")', function() {
      // uncomment below and update the code to test the property engaging
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property backfireRisk (base name: "backfire_risk")', function() {
      // uncomment below and update the code to test the property backfireRisk
      //var instane = new TournesolApi.VideoCommentsSerializerV2();
      //expect(instance).to.be();
    });

  });

}));
