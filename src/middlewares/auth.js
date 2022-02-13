const jwt = require("jsonwebtoken");

const autheticate = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    try {
        const sss = jwt.verify(token, 'hank123Yss');
        req.verifiedUser = sss;
        next();
    } catch (error) {
        next();
    }
};

module.exports = {
    autheticate
};
