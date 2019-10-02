/* jshint esversion: 9 */

/**
 *
 */

class BaseError extends Error {
    constructor(message, status, errors) {
        // Calling parent constructor of base Error class.
        super(Array.isArray(message) ? message[0] : message);

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Saving class getName in the property of our custom error as a shortcut.
        this.name = this.constructor.name;

        // You can use any additional properties you want.
        // I'm going to use preferred HTTP status for this error types.
        // `500` is the default value if not specified.
        this.status = status || 500;

        // if(errors.length < 1) {
        //     if(Array.isArray(message)) errors = message;
        //     else errors.push(message);
        // }

        this.errors = errors;

    }
}

module.exports = BaseError;

/*
Error Code | Meaning
---------- | -------
400         |       Bad Request -- Your request is invalid.
401         |       Unauthorized -- Your API key is wrong.
403         |       Forbidden -- The kitten requested is hidden for administrators only.
404         |       Not Found -- The specified kitten could not be found.
405         |       Method Not Allowed -- You tried to access a kitten with an invalid method.
406         |       Not Acceptable -- You requested a format that isn't json.
410         |       Gone -- The kitten requested has been removed from our servers.
418         |       I'm a teapot.
429         |       Too Many Requests -- You're requesting too many kittens! Slow down!
500         |       Internal Server Error -- We had a problem with our server. Try again later.
503         |       Service Unavailable -- We're temporarily offline for maintenance. Please try again later.
*/