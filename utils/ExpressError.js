// ExpressError is our CUSTOM ERROR CLASS.JavaScript already provides a built-in class called "Error".
// Example:
// let err = new Error("Something went wrong");
//
// But in an Express application, we also want to store
// an HTTP status code (404, 500, etc.) along with the error.
//
// So we create our own ExpressError class.
class ExpressError extends Error {

    // Constructor runs automatically when we create an object like:
    //
    // new ExpressError(404, "Page Not Found")
    //
    // Here:
    // statusCode = 404
    // message = "Page Not Found"
    constructor(statusCode, message) {
        // "ExpressError" extends the built-in JavaScript "Error" class.
        //
        // super() calls the constructor of the parent class (Error).
        //
        // Whenever we use "extends", we need to call super()
        // before using "this" inside the child constructor.

        super();

        // Store the HTTP status code inside the error object.
        //
        // Example:
        // new ExpressError(404, "Page Not Found")
        //
        // this.statusCode will become 404.

        this.statusCode = statusCode;

        // Store the error message inside the error object.
        //
        // Example:
        // this.message will become "Page Not Found".

        this.message = message;
    }
}


// Export the ExpressError class so that we can use it
// in other files such as app.js.
//
// Example in app.js:
//
// const ExpressError = require("./utils/ExpressError.js");
//
// Then we can create an error like:
//
// throw new ExpressError(404, "Page Not Found");

module.exports = ExpressError;