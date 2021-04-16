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
import StatisticsSerializerV2 from '../model/StatisticsSerializerV2';

/**
* Statistics service.
* @module api/StatisticsApi
* @version 2.0.0
*/
export default class StatisticsApi {

    /**
    * Constructs a new StatisticsApi. 
    * @alias module:api/StatisticsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the view operation.
     * @callback module:api/StatisticsApi~viewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatisticsSerializerV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics for the website.
     * @param {module:api/StatisticsApi~viewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatisticsSerializerV2}
     */
    view(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = StatisticsSerializerV2;
      return this.apiClient.callApi(
        '/api/v2/statistics/view/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
