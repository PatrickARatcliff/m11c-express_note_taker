const express = require('express');
const path = require('path');
const api = require('./routes/index');
//http://localhost:3001
const PORT = process.env.PORT || 3001;

const router = express();
// Middleware for parsing JSON and urlencoded form data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use('/api', api);

router.use(express.static('public'));

// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

router.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
