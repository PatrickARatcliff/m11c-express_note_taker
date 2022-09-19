const express = require('express');
const path = require('path');
const api = require('./routes/notes.js');
//http://localhost:3001
const PORT = process.env.PORT || 3001;

const router = express();

//middleware: parse JSON and urlencoded form data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use('/api', api);

router.use(express.static('public'));

// GET homepage
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

router.listen(PORT, () =>
  console.log(`Homepage Link: http://localhost:${PORT}`)
);
