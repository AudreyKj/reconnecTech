const bcrypt = require("bcryptjs");
const { promisify } = require("util");

let genSalt = promisify(bcrypt.genSalt);
module.exports.salt = bcrypt.genSaltSync(10);
module.exports.hash = promisify(bcrypt.hash);
module.exports.compare = promisify(bcrypt.compare);

