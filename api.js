const express = require('express');

export const reverseText = () => {
  const router = express.Router();
  router.get('/reverse-text', (req, res, next) => {
      if (typeof(req.query.text) === 'string') {
          res.json({reversed: req.query.text.split("").reverse().join("")});
      }
      else
      {
          res.status(400).end();
      }
      next();
  });
  return router;
};
