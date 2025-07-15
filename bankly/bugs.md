** Document your bugs here **


Bug 1:

In router.post in auth.js - the  async function was missing the AWAIT keyword from user variable that's to return a promise in the function. 

router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    let user = User.authenticate(username, password);


Bug 2:

In router.delete in users.js - the async function was missing the AWAIT keyword from user variable that's to return a promise in the function.


router.delete('/:username', authUser, requireAdmin, async function(
  req,
  res,
  next
) {
  try {
    User.delete(req.params.username);
    return res.json({ message: 'deleted' });
  }


Bug 3:


In models/user.js - the function was missing the THROW keyword when needing to throw an error when the user is not found. 

  static async get(username) {
    const result = await db.query(
      `SELECT username,
                first_name,
                last_name,
                email,
                phone
         FROM users
         WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];

    if (!user) {
      new ExpressError('No such user', 404);
    }

    return user;
  }




Bug 4:




In helpers/partialUpdate.js - the for loop is using the variable key which is also a parameter. The loop overwrites the parameter key which is later being used in the query - breaking the code.




function sqlForPartialUpdate(table, items, key, id) {
  // keep track of item indexes
  // store all the columns we want to update and associate with vals

  let idx = 1;
  let columns = [];

  // filter out keys that start with "_" -- we don't want these in DB
  for (let key in items) {
    if (key.startsWith("_")) {
      delete items[key]
    }
  }

  for (let column in items) {
    columns.push(`${column}=$${idx}`);
    idx += 1;
  }

  // build query
  let cols = columns.join(", ");
  let query = `UPDATE ${table} SET ${cols} WHERE ${key}=$${idx} RETURNING *`;

  let values = Object.values(items);
  values.push(id);

  return {query, values};
}


module.exports = sqlForPartialUpdate;




Bug 5: 


In middleware/auth.js - while jwt.decode does parsec the JWT into readable JSON, it does not check the signature of the token, or verify the token was signed to the secret key, or check for expiration. This is a security risk.

function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;
    if (token) {
      let payload = jwt.decode(token);
      req.curr_username = payload.username;
      req.curr_admin = payload.admin;
    }
    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
} // end

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};




Bug 6:

In helperss/createToken.js - the function creates a token without a expired date. This is a security risk.
expiresIn needs to be added and set to a limited time.

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/** return signed JWT for payload {username, admin}. */

function createToken(username, admin=false) {
  let payload = {username, admin};
  return jwt.sign(payload, SECRET_KEY);
}


module.exports = createToken;