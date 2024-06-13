const db = require('../models/userModels')
const userController = {

  getUser: (req, res, next) => {
    const { username, password } = req.body;
    const getUser = `SELECT * FROM bu WHERE un = '${username}' AND pw = '${password}'`
    db.query(getUser)
      .then(data => {
        if(!data.rows.length) return next({
          log: 'Error with login',
          message: { err: 'Error with username or password' },
        })
        return next()
      })
      .catch(err => {
        return next(err)
      })
  },

  createUser: async (req, res, next) => {
    const { username, password } = req.body;
    if(!username || !password || username.trim() === '' || password.trim() === '') return next({
      log: 'Error with signup',
      message: { err: 'Error with username or password' },
    })
    const createUser = `INSERT INTO bu (un, pw) VALUES ('${username}', '${password}')`
    const getUser = `SELECT * FROM bu WHERE un = '${username}'`
    const check = await db.query(getUser)
    console.log(check.rows.length)
    if(check.rows.length) return next({
      log: 'Error with signup',
      message: { err: 'username exists' },
    })
    db.query(createUser)
      .then(data => {
        if(!data.rows.length) return next({
          log: 'Error with signup',
          message: { err: 'Error with username or password' },
        })
        return next()
      })
      .catch(err => {
        return next(err)
      })
  },

}


module.exports = userController;