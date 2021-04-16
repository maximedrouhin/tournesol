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
import VerifiableEmail from './VerifiableEmail';

/**
 * The PaginatedVerifiableEmailList model module.
 * @module model/PaginatedVerifiableEmailList
 * @version 2.0.0
 */
class PaginatedVerifiableEmailList {
    /**
     * Constructs a new <code>PaginatedVerifiableEmailList</code>.
     * @alias module:model/PaginatedVerifiableEmailList
     */
    constructor() { 
        
        PaginatedVerifiableEmailList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedVerifiableEmailList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedVerifiableEmailList} obj Optional instance to populate.
     * @return {module:model/PaginatedVerifiableEmailList} The populated <code>PaginatedVerifiableEmailList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedVerifiableEmailList();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [VerifiableEmail]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
PaginatedVerifiableEmailList.prototype['count'] = undefined;

/**
 * @member {String} next
 */
PaginatedVerifiableEmailList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedVerifiableEmailList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/VerifiableEmail>} results
 */
PaginatedVerifiableEmailList.prototype['results'] = undefined;






export default PaginatedVerifiableEmailList;

