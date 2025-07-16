// import { Error } from "mongoose";

// class ApiError extends Error {
//     constructor(
//         statuscode,
//         message= "something went wrong",
//         error = [],
//         stack = ""
//     ){
//         super(message)
//         this.statuscode = statuscode
//         this.data = null
//         this.message = message
//         this.success = false;
//         this.errors = errors

//         if (stack) {
//             this.stack = stack
//         }else{
//             Error.captureStackTrace(this, this.constructor)
//         }
//     }
// }
// export {ApiError}

class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}