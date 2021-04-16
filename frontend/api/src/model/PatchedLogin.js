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

import ApiClient from '../ApiClient';

/**
 * The PatchedLogin model module.
 * @module model/PatchedLogin
 * @version 2.0.0
 */
class PatchedLogin {
    /**
     * Constructs a new <code>PatchedLogin</code>.
     * Log in a user with username and a password
     * @alias module:model/PatchedLogin
     */
    constructor() { 
        
        PatchedLogin.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedLogin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedLogin} obj Optional instance to populate.
     * @return {module:model/PatchedLogin} The populated <code>PatchedLogin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedLogin();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Your username
 * @member {String} username
 */
PatchedLogin.prototype['username'] = undefined;

/**
 * Your password
 * @member {String} password
 */
PatchedLogin.prototype['password'] = undefined;






export default PatchedLogin;

