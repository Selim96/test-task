const { createError } = require('../helpers');

const validation = (schema) => {
    const func = (req, res, next) => {
        console.log(req.body)
        try {
            const { error } = schema.validate(req.body);
            if (error) {
                console.log("error")
                throw createError(400, error.message);
            }
            next();
        } catch (error) {
            next(error);
        }
    }
    return func;
}

module.exports = validation;