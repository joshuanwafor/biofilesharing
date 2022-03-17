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


import * as runtime from '../runtime';
import {
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    InlineObject1,
    InlineObject1FromJSON,
    InlineObject1ToJSON,
    InlineResponse400,
    InlineResponse400FromJSON,
    InlineResponse400ToJSON,
    Order,
    OrderFromJSON,
    OrderToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface AddBankAccountRequest {
    inlineObject?: InlineObject;
}

export interface GetUserAuthTokenRequest {
    inlineObject1?: InlineObject1;
}

export interface GetUserByIdRequest {
    userId: number;
}

export interface UpdateUserProfileRequest {
    user?: User;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Updates user bank account
     * add-bank-account
     */
    async addBankAccountRaw(requestParameters: AddBankAccountRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/user/bank-account`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Updates user bank account
     * add-bank-account
     */
    async addBankAccount(requestParameters: AddBankAccountRequest = {}, initOverrides?: RequestInit): Promise<User> {
        const response = await this.addBankAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Queries user auth token
     * get-user-auth-token
     */
    async getUserAuthTokenRaw(requestParameters: GetUserAuthTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineObject1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/user/auth`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject1ToJSON(requestParameters.inlineObject1),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineObject1FromJSON(jsonValue));
    }

    /**
     * Queries user auth token
     * get-user-auth-token
     */
    async getUserAuthToken(requestParameters: GetUserAuthTokenRequest = {}, initOverrides?: RequestInit): Promise<InlineObject1> {
        const response = await this.getUserAuthTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Finds and returns a user profile by id
     * get-user-by-id
     */
    async getUserByIdRaw(requestParameters: GetUserByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Finds and returns a user profile by id
     * get-user-by-id
     */
    async getUserById(requestParameters: GetUserByIdRequest, initOverrides?: RequestInit): Promise<User> {
        const response = await this.getUserByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns user profile
     * get-user-profile
     */
    async getUserProfileRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<User>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Returns user profile
     * get-user-profile
     */
    async getUserProfile(initOverrides?: RequestInit): Promise<User> {
        const response = await this.getUserProfileRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns all user sales
     * get-account-sales
     */
    async getUserSalesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Order>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/user/my-sales`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrderFromJSON));
    }

    /**
     * Returns all user sales
     * get-account-sales
     */
    async getUserSales(initOverrides?: RequestInit): Promise<Array<Order>> {
        const response = await this.getUserSalesRaw(initOverrides);
        return await response.value();
    }

    /**
     * get all users available in the system
     * get-users
     */
    async getUsersRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * get all users available in the system
     * get-users
     */
    async getUsers(initOverrides?: RequestInit): Promise<Array<User>> {
        const response = await this.getUsersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates user profile
     * update-user-profile
     */
    async updateUserProfileRaw(requestParameters: UpdateUserProfileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/user`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates user profile
     * update-user-profile
     */
    async updateUserProfile(requestParameters: UpdateUserProfileRequest = {}, initOverrides?: RequestInit): Promise<void> {
        await this.updateUserProfileRaw(requestParameters, initOverrides);
    }

}