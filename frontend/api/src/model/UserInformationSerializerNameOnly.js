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
 * The UserInformationSerializerNameOnly model module.
 * @module model/UserInformationSerializerNameOnly
 * @version 2.0.0
 */
class UserInformationSerializerNameOnly {
    /**
     * Constructs a new <code>UserInformationSerializerNameOnly</code>.
     * Only show username of the person.
     * @alias module:model/UserInformationSerializerNameOnly
     * @param username {String} Username of the contributor
     */
    constructor(username) { 
        
        UserInformationSerializerNameOnly.initialize(this, username);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username) { 
        obj['username'] = username;
    }

    /**
     * Constructs a <code>UserInformationSerializerNameOnly</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserInformationSerializerNameOnly} obj Optional instance to populate.
     * @return {module:model/UserInformationSerializerNameOnly} The populated <code>UserInformationSerializerNameOnly</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserInformationSerializerNameOnly();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Username of the contributor
 * @member {String} username
 */
UserInformationSerializerNameOnly.prototype['username'] = undefined;






export default UserInformationSerializerNameOnly;

