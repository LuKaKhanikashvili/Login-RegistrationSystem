const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, (req, res) => {
  res.send('This is a protected route');
});

router.get('/admin', auth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied. Admins only.');
  }
  res.send('This is an admin route');
});

module.exports = router;
