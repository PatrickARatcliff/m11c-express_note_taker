const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');
const uuid = require('../../helpers/uuid');

//http://localhost:3001/api/notes
// GET Route for retrieving all the notes
router.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
router.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});
//http://localhost:3001/api/notes/:id
// router.delete('/:id', (req, res) => {
//   console.info(`${req.method} request received to delete a note`);
//   console.log(req.body);


// });

module.exports = router;