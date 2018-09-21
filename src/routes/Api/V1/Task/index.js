const express = require('express')
const router = express.Router()
const AppRoot = require('app-root-path')

router.get('/', async (req, res, next) => {
  let user = await userHelpers.loadUserData({id: req.currentUser.id})
  return res.send(user)
})

module.exports = router;
