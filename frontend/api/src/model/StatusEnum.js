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
* Enum class StatusEnum.
* @enum {}
* @readonly
*/
export default class StatusEnum {
    
        /**
         * value: "RJ"
         * @const
         */
        "RJ" = "RJ";

    
        /**
         * value: "ACK"
         * @const
         */
        "ACK" = "ACK";

    
        /**
         * value: "PD"
         * @const
         */
        "PD" = "PD";

    

    /**
    * Returns a <code>StatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StatusEnum} The enum <code>StatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

