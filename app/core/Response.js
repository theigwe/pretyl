/* jshint esversion: 9 */

const HttpStatus = require('http-status-codes');

const BaseResponse = {
	status: 'ERROR',
	message: '',
	errors: [],
	data: {},
};

class Response {
	constructor() {}

	static get HTTP_STATUS() {
		return HttpStatus;
	}

	static getDefaultResponseHandler(res) {
		return {
			onSuccess: (data, message, code) =>
				Response.respondWithSuccess(
					res,
					code || Response.HTTP_STATUS.OK,
					data || {},
					message || ''
				),
			onError: error =>
				Response.respondWithError(
					res,
					error.status || 500,
					error.message || 'Unknown error',
					error.errors || []
				),
		};
	}

	static getDefaultResponseHandlerData(res) {
		return {
			onSuccess: (data, message, code) =>
				Response.respondWithSuccess(
					res,
					code || Response.HTTP_STATUS.OK,
					data,
					message
				),
			onError: error =>
				Response.respondWithErrorData(
					res,
					error.status,
					error.message,
					error.data,
					error.errors || []
				),
		};
	}

	static getDefaultResponseHandlerError(res, successCallback) {
		return {
			onSuccess: (data, message, code) =>
				successCallback(data, message, code),
			onError: error =>
				Response.respondWithError(
					res,
					error.status || 500,
					error.message || 'Unknown error',
					error.errors || []
				),
		};
	}

	static getDefaultResponseHandlerSuccess(res, errorCallback) {
		return {
			onSuccess: (data, message, code) =>
				Response.respondWithSuccess(
					res,
					code || Response.HTTP_STATUS.OK,
					data,
					message
				),
			onError: error => errorCallback(error),
		};
	}

	static generateHATEOASLink(link, method, rel) {
		return {
			link: link,
			method: method,
			rel: rel,
		};
	}

	static respondWithSuccess(res, statusCode, data, message = '', links = []) {
		delete BaseResponse.errors;
		res.status(statusCode).json({
			...BaseResponse,
			status: 'SUCCESS',
			data,
			message,
		});
	}

	static async respondWithErrorData(
		res,
		statusCode,
		message = '',
		data = '',
		errors = [],
		links = []
	) {
		res.status(statusCode).json({ ...BaseResponse, message, data, errors });
	}

	static respondWithError(
		res,
		statusCode,
		message = '',
		errors = [],
		links = []
	) {
		delete BaseResponse.data;
		res.status(statusCode).json({ ...BaseResponse, message, errors });
	}
}

module.exports = Response;
