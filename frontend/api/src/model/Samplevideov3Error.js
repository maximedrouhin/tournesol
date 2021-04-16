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
import Samplevideov3ErrorDetailEnum from './Samplevideov3ErrorDetailEnum';

/**
 * The Samplevideov3Error model module.
 * @module model/Samplevideov3Error
 * @version 2.0.0
 */
class Samplevideov3Error {
    /**
     * Constructs a new <code>Samplevideov3Error</code>.
     * @alias module:model/Samplevideov3Error
     * @param detail {module:model/Samplevideov3ErrorDetailEnum} Reason code for error, explanation:<br /><b><u>UNKNOWN</u>:</b> <i>Unknown error</i><br /><b><u>DB_ERROR</u>:</b> <i>Unknown database error</i><br /><b><u>PK_ERROR</u>:</b> <i>Invalid primary key</i><br /><b><u>NO_VIDEOS</u>:</b> <i>No videos in the system</i><br /><b><u>ALREADY_EXISTS</u>:</b> <i>Object already exists</i><br /><b><u>NO_FEATURES</u>:</b> <i>No features selected as active</i><br /><b><u>NO_RATE_LATER_NO_RATED</u>:</b> <i>Rate later list is empty, and list of rated videos is empty</i><br /><b><u>NO_RATE_LATER_ALL_RATED</u>:</b> <i>Rate later list is empty, and all videos are rated against each other in terms of all quality features</i><br /><b><u>FIRST_RATED_AGAINST_ALL_RATED</u>:</b> <i>First video was rated against all other rated videos</i>
     */
    constructor(detail) { 
        
        Samplevideov3Error.initialize(this, detail);
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
     * Constructs a <code>Samplevideov3Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Samplevideov3Error} obj Optional instance to populate.
     * @return {module:model/Samplevideov3Error} The populated <code>Samplevideov3Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Samplevideov3Error();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], Samplevideov3ErrorDetailEnum);
            }
        }
        return obj;
    }


}

/**
 * Reason code for error, explanation:<br /><b><u>UNKNOWN</u>:</b> <i>Unknown error</i><br /><b><u>DB_ERROR</u>:</b> <i>Unknown database error</i><br /><b><u>PK_ERROR</u>:</b> <i>Invalid primary key</i><br /><b><u>NO_VIDEOS</u>:</b> <i>No videos in the system</i><br /><b><u>ALREADY_EXISTS</u>:</b> <i>Object already exists</i><br /><b><u>NO_FEATURES</u>:</b> <i>No features selected as active</i><br /><b><u>NO_RATE_LATER_NO_RATED</u>:</b> <i>Rate later list is empty, and list of rated videos is empty</i><br /><b><u>NO_RATE_LATER_ALL_RATED</u>:</b> <i>Rate later list is empty, and all videos are rated against each other in terms of all quality features</i><br /><b><u>FIRST_RATED_AGAINST_ALL_RATED</u>:</b> <i>First video was rated against all other rated videos</i>
 * @member {module:model/Samplevideov3ErrorDetailEnum} detail
 */
Samplevideov3Error.prototype['detail'] = undefined;






export default Samplevideov3Error;

