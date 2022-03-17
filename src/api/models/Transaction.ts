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
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    buyerEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    buyerPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    merchantId?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    transactionRef?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    amount?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    details?: string;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'buyerEmail': !exists(json, 'buyer_email') ? undefined : json['buyer_email'],
        'buyerPhone': !exists(json, 'buyer_phone') ? undefined : json['buyer_phone'],
        'projectId': !exists(json, 'project_id') ? undefined : json['project_id'],
        'merchantId': !exists(json, ' merchant_id') ? undefined : json[' merchant_id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'transactionRef': !exists(json, 'transaction_ref') ? undefined : json['transaction_ref'],
        'amount': !exists(json, ' amount') ? undefined : json[' amount'],
        'details': !exists(json, 'details') ? undefined : json['details'],
    };
}

export function TransactionToJSON(value?: Transaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'buyer_email': value.buyerEmail,
        'buyer_phone': value.buyerPhone,
        'project_id': value.projectId,
        ' merchant_id': value.merchantId,
        'description': value.description,
        'status': value.status,
        'transaction_ref': value.transactionRef,
        ' amount': value.amount,
        'details': value.details,
    };
}
