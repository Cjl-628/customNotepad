const router = require('express').Router();
const { Note } = require('../db/Note');

//GET /api/notes
router.get('/', async (req, res, next) => {
  try {
    const notesList = await Note.findAll({ sort: [updatedAt, descending] });
    res.send(notesList);
  } catch (error) {
    next(error);
  }
});

//POST /api/notes
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Note.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
