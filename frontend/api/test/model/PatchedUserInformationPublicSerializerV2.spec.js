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
    instance = new TournesolApi.PatchedUserInformationPublicSerializerV2();
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

  describe('PatchedUserInformationPublicSerializerV2', function() {
    it('should create an instance of PatchedUserInformationPublicSerializerV2', function() {
      // uncomment below and update the code to test PatchedUserInformationPublicSerializerV2
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be.a(TournesolApi.PatchedUserInformationPublicSerializerV2);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property bio (base name: "bio")', function() {
      // uncomment below and update the code to test the property bio
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property birthYear (base name: "birth_year")', function() {
      // uncomment below and update the code to test the property birthYear
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property nationality (base name: "nationality")', function() {
      // uncomment below and update the code to test the property nationality
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property race (base name: "race")', function() {
      // uncomment below and update the code to test the property race
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property politicalAffiliation (base name: "political_affiliation")', function() {
      // uncomment below and update the code to test the property politicalAffiliation
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property religion (base name: "religion")', function() {
      // uncomment below and update the code to test the property religion
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property degreeOfPoliticalEngagement (base name: "degree_of_political_engagement")', function() {
      // uncomment below and update the code to test the property degreeOfPoliticalEngagement
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property linkedin (base name: "linkedin")', function() {
      // uncomment below and update the code to test the property linkedin
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property youtube (base name: "youtube")', function() {
      // uncomment below and update the code to test the property youtube
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property googleScholar (base name: "google_scholar")', function() {
      // uncomment below and update the code to test the property googleScholar
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property orcid (base name: "orcid")', function() {
      // uncomment below and update the code to test the property orcid
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property twitter (base name: "twitter")', function() {
      // uncomment below and update the code to test the property twitter
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property nRatings (base name: "n_ratings")', function() {
      // uncomment below and update the code to test the property nRatings
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property nVideos (base name: "n_videos")', function() {
      // uncomment below and update the code to test the property nVideos
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property nComments (base name: "n_comments")', function() {
      // uncomment below and update the code to test the property nComments
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property nLikes (base name: "n_likes")', function() {
      // uncomment below and update the code to test the property nLikes
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property degrees (base name: "degrees")', function() {
      // uncomment below and update the code to test the property degrees
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property expertises (base name: "expertises")', function() {
      // uncomment below and update the code to test the property expertises
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property expertiseKeywords (base name: "expertise_keywords")', function() {
      // uncomment below and update the code to test the property expertiseKeywords
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property emails (base name: "emails")', function() {
      // uncomment below and update the code to test the property emails
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property isCertified (base name: "is_certified")', function() {
      // uncomment below and update the code to test the property isCertified
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property commentAnonymously (base name: "comment_anonymously")', function() {
      // uncomment below and update the code to test the property commentAnonymously
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

    it('should have the property showOnlinePresence (base name: "show_online_presence")', function() {
      // uncomment below and update the code to test the property showOnlinePresence
      //var instane = new TournesolApi.PatchedUserInformationPublicSerializerV2();
      //expect(instance).to.be();
    });

  });

}));
