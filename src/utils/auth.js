const jwt = require('jsonwebtoken');

const createJWTToken = user => {
    return jwt.sign({ user }, 'hank123Yss', {
        expiresIn: '1h'
    });
};

module.exports = {
    createJWTToken
};
