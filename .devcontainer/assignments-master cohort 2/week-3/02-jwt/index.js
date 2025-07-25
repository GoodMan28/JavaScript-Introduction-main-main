const jwt = require("jsonwebtoken")
const zod = require("zod")
const jwtPassword = 'secret';


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
let usernameSchema = zod.string().email();
let passwordSchema = zod.string().min(6);
function signJwt(username, password) {
    // Your code here
    let usernameResponse = usernameSchema.safeParse(username);
    let passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    let token = jwt.sign({
        username
    }, jwtPassword);

    return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try {
        let decodedPayload = jwt.verify(token, jwtPassword);
        // if the above line returns an exception, then true wont be returned
        // and the control reaches the catch block where false is returned 
        return true;
    }
    catch(err) {
        return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    // decode function either returns the decoded payload or returns null 
    // so no need for a try-catch block
    let decodedJWT = jwt.decode(token);
    if(decodeJwt) {
        return true;
    }
    return false;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
};
