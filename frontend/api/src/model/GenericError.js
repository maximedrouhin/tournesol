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
import GenericErrorDetailEnum from './GenericErrorDetailEnum';

/**
 * The GenericError model module.
 * @module model/GenericError
 * @version 2.0.0
 */
class GenericError {
    /**
     * Constructs a new <code>GenericError</code>.
     * @alias module:model/GenericError
     * @param detail {module:model/GenericErrorDetailEnum} Reason code for error, explanation:<br /><b><u>UNKNOWN</u>:</b> <i>Unknown error</i><br /><b><u>DB_ERROR</u>:</b> <i>Unknown database error</i><br /><b><u>PK_ERROR</u>:</b> <i>Invalid primary key</i><br /><b><u>NO_VIDEOS</u>:</b> <i>No videos in the system</i><br /><b><u>ALREADY_EXISTS</u>:</b> <i>Object already exists</i>
     */
    constructor(detail) { 
        
        GenericError.initialize(this, detail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, detail) { 
        obj['detail'] = detail;
    }

    /**
     * Constructs a <code>GenericError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenericError} obj Optional instance to populate.
     * @return {module:model/GenericError} The populated <code>GenericError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenericError();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], GenericErrorDetailEnum);
            }
        }
        return obj;
    }


}

/**
 * Reason code for error, explanation:<br /><b><u>UNKNOWN</u>:</b> <i>Unknown error</i><br /><b><u>DB_ERROR</u>:</b> <i>Unknown database error</i><br /><b><u>PK_ERROR</u>:</b> <i>Invalid primary key</i><br /><b><u>NO_VIDEOS</u>:</b> <i>No videos in the system</i><br /><b><u>ALREADY_EXISTS</u>:</b> <i>Object already exists</i>
 * @member {module:model/GenericErrorDetailEnum} detail
 */
GenericError.prototype['detail'] = undefined;






export default GenericError;

