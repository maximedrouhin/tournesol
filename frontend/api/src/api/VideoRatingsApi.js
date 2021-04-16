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


import ApiClient from "../ApiClient";
import PaginatedVideoRatingsSerializerV2List from '../model/PaginatedVideoRatingsSerializerV2List';
import PaginatedVideoRatingsStatisticsSerializerV2List from '../model/PaginatedVideoRatingsStatisticsSerializerV2List';
import VideoRatingsSerializerV2 from '../model/VideoRatingsSerializerV2';

/**
* VideoRatings service.
* @module api/VideoRatingsApi
* @version 2.0.0
*/
export default class VideoRatingsApi {

    /**
    * Constructs a new VideoRatingsApi. 
    * @alias module:api/VideoRatingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the videoRatingStatistics operation.
     * @callback module:api/VideoRatingsApi~videoRatingStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedVideoRatingsStatisticsSerializerV2List} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistical data on video ratings.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.backfireRisk Resilience to backfiring risks [preference override]
     * @param {Number} opts.betterHabits Encourages better habits [preference override]
     * @param {Number} opts.diversityInclusion Diversity and Inclusion [preference override]
     * @param {Number} opts.engaging Engaging and thought-provoking [preference override]
     * @param {Number} opts.entertainingRelaxing Entertaining and relaxing [preference override]
     * @param {Number} opts.importance Important and actionable [preference override]
     * @param {Number} opts.laymanFriendly Layman-friendly [preference override]
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {Number} opts.pedagogy Clear and pedagogical [preference override]
     * @param {Number} opts.reliability Reliable and not misleading [preference override]
     * @param {String} opts.video video
     * @param {String} opts.videoVideoId video__video_id
     * @param {module:api/VideoRatingsApi~videoRatingStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedVideoRatingsStatisticsSerializerV2List}
     */
    videoRatingStatistics(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'backfire_risk': opts['backfireRisk'],
        'better_habits': opts['betterHabits'],
        'diversity_inclusion': opts['diversityInclusion'],
        'engaging': opts['engaging'],
        'entertaining_relaxing': opts['entertainingRelaxing'],
        'importance': opts['importance'],
        'layman_friendly': opts['laymanFriendly'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'pedagogy': opts['pedagogy'],
        'reliability': opts['reliability'],
        'video': opts['video'],
        'video__video_id': opts['videoVideoId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedVideoRatingsStatisticsSerializerV2List;
      return this.apiClient.callApi(
        '/api/v2/video_ratings/video_rating_statistics/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the videoRatingsList operation.
     * @callback module:api/VideoRatingsApi~videoRatingsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedVideoRatingsSerializerV2List} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my video ratings (predictions of my algorithmic representative)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {String} opts.video video
     * @param {String} opts.videoVideoId video__video_id
     * @param {module:api/VideoRatingsApi~videoRatingsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedVideoRatingsSerializerV2List}
     */
    videoRatingsList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'video': opts['video'],
        'video__video_id': opts['videoVideoId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedVideoRatingsSerializerV2List;
      return this.apiClient.callApi(
        '/api/v2/video_ratings/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the videoRatingsRetrieve operation.
     * @callback module:api/VideoRatingsApi~videoRatingsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoRatingsSerializerV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get one video rating (predictions of my algorithmic representative)
     * @param {Number} id A unique integer value identifying this video rating.
     * @param {module:api/VideoRatingsApi~videoRatingsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoRatingsSerializerV2}
     */
    videoRatingsRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling videoRatingsRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoRatingsSerializerV2;
      return this.apiClient.callApi(
        '/api/v2/video_ratings/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
