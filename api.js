import express from 'express';
import runes from 'runes';
export const reverseText = () => {
  const router = express.Router();
  router.get('/reverse-text', (req, res, next) => {
      if (typeof(req.query.text) === 'string') {
          // runes gets around split not handling emoji properly
          res.json({reversed: runes(req.query.text).reverse().join("")});
          next();
      }
      else {
          res.status(400).end();
      }
  });
  return router;
};
