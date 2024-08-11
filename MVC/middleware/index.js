const fs = require('fs')

const logReqRes = (filename) => {
    return (req, res, next) => {
        fs.appendFile(filename, 
            `${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`,
            (data, err) => {
                next();
            }
        )
    }
}

module.exports = {logReqRes};