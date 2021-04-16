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
import OnlyUsernameAndID from '../model/OnlyUsernameAndID';
import PaginatedOnlyUsernameAndIDList from '../model/PaginatedOnlyUsernameAndIDList';
import PatchedChangePassword from '../model/PatchedChangePassword';
import PatchedLogin from '../model/PatchedLogin';
import PatchedOnlyUsernameAndID from '../model/PatchedOnlyUsernameAndID';
import PatchedResetPassword from '../model/PatchedResetPassword';
import Register from '../model/Register';

/**
* LoginSignup service.
* @module api/LoginSignupApi
* @version 2.0.0
*/
export default class LoginSignupApi {

    /**
    * Constructs a new LoginSignupApi. 
    * @alias module:api/LoginSignupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the loginSignupChangePasswordPartialUpdate operation.
     * @callback module:api/LoginSignupApi~loginSignupChangePasswordPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OnlyUsernameAndID} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change password
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedChangePassword} opts.patchedChangePassword 
     * @param {module:api/LoginSignupApi~loginSignupChangePasswordPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OnlyUsernameAndID}
     */
    loginSignupChangePasswordPartialUpdate(opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedChangePassword'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = OnlyUsernameAndID;
      return this.apiClient.callApi(
        '/api/v2/login_signup/change_password/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSignupList operation.
     * @callback module:api/LoginSignupApi~loginSignupListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedOnlyUsernameAndIDList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my username in a list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {module:api/LoginSignupApi~loginSignupListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedOnlyUsernameAndIDList}
     */
    loginSignupList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedOnlyUsernameAndIDList;
      return this.apiClient.callApi(
        '/api/v2/login_signup/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSignupLoginPartialUpdate operation.
     * @callback module:api/LoginSignupApi~loginSignupLoginPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OnlyUsernameAndID} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a user.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedLogin} opts.patchedLogin 
     * @param {module:api/LoginSignupApi~loginSignupLoginPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OnlyUsernameAndID}
     */
    loginSignupLoginPartialUpdate(opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedLogin'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = OnlyUsernameAndID;
      return this.apiClient.callApi(
        '/api/v2/login_signup/login/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSignupLogoutPartialUpdate operation.
     * @callback module:api/LoginSignupApi~loginSignupLogoutPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out.
     * @param {module:api/LoginSignupApi~loginSignupLogoutPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    loginSignupLogoutPartialUpdate(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/login_signup/logout/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSignupPartialUpdate operation.
     * @callback module:api/LoginSignupApi~loginSignupPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OnlyUsernameAndID} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update my username
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedOnlyUsernameAndID} opts.patchedOnlyUsernameAndID 
     * @param {module:api/LoginSignupApi~loginSignupPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OnlyUsernameAndID}
     */
    loginSignupPartialUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedOnlyUsernameAndID'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling loginSignupPartialUpdate");
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
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = OnlyUsernameAndID;
      return this.apiClient.callApi(
        '/api/v2/login_signup/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSignupRegisterCreate operation.
     * @callback module:api/LoginSignupApi~loginSignupRegisterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OnlyUsernameAndID} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a user.
     * @param {module:model/Register} register 
     * @param {module:api/LoginSignupApi~loginSignupRegisterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OnlyUsernameAndID}
     */
    loginSignupRegisterCreate(register, callback) {
      let postBody = register;
      // verify the required parameter 'register' is set
      if (register === undefined || register === null) {
        throw new Error("Missing the required parameter 'register' when calling loginSignupRegisterCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = OnlyUsernameAndID;
      return this.apiClient.callApi(
        '/api/v2/login_signup/register/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSignupResetPasswordPartialUpdate operation.
     * @callback module:api/LoginSignupApi~loginSignupResetPasswordPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset password.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchedResetPassword} opts.patchedResetPassword 
     * @param {module:api/LoginSignupApi~loginSignupResetPasswordPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    loginSignupResetPasswordPartialUpdate(opts, callback) {
      opts = opts || {};
      let postBody = opts['patchedResetPassword'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth', 'tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/login_signup/reset_password/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSignupRetrieve operation.
     * @callback module:api/LoginSignupApi~loginSignupRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OnlyUsernameAndID} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my username by my user preferences id
     * @param {String} id 
     * @param {module:api/LoginSignupApi~loginSignupRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OnlyUsernameAndID}
     */
    loginSignupRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling loginSignupRetrieve");
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
      let returnType = OnlyUsernameAndID;
      return this.apiClient.callApi(
        '/api/v2/login_signup/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSignupUpdate operation.
     * @callback module:api/LoginSignupApi~loginSignupUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OnlyUsernameAndID} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update my username
     * @param {String} id 
     * @param {module:model/OnlyUsernameAndID} onlyUsernameAndID 
     * @param {module:api/LoginSignupApi~loginSignupUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OnlyUsernameAndID}
     */
    loginSignupUpdate(id, onlyUsernameAndID, callback) {
      let postBody = onlyUsernameAndID;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling loginSignupUpdate");
      }
      // verify the required parameter 'onlyUsernameAndID' is set
      if (onlyUsernameAndID === undefined || onlyUsernameAndID === null) {
        throw new Error("Missing the required parameter 'onlyUsernameAndID' when calling loginSignupUpdate");
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
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = OnlyUsernameAndID;
      return this.apiClient.callApi(
        '/api/v2/login_signup/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
