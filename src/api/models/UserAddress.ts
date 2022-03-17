/* tslint:disable */
/* eslint-disable */
/**
 * tollgator-core
 * Full api description goes here
 *
 * The version of the OpenAPI document: 1.0
 * Contact: joshuanwafor01@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserAddress
 */
export interface UserAddress {
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    ?: string;
}

export function UserAddressFromJSON(json: any): UserAddress {
    return UserAddressFromJSONTyped(json, false);
}

export function UserAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'country': !exists(json, 'country') ? undefined : json['country'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'zipCode': !exists(json, 'zip_code') ? undefined : json['zip_code'],
        '': !exists(json, '') ? undefined : json[''],
    };
}

export function UserAddressToJSON(value?: UserAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country': value.country,
        'state': value.state,
        'street': value.street,
        'zip_code': value.zipCode,
        '': value.,
    };
}
