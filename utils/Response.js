import { STATUS } from "../constants/enum.js"

class ResponseBuilder {
    constructor() { }

    err = (code, message) => {
        return {
            status: STATUS[code],
            message: message
        }
    }

    success = (data = {}) => {
        return {
            status: STATUS[200],
            message: STATUS[200],
            data: data
        }
    }

}

export default new ResponseBuilder;