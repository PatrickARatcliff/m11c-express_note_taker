const express = require('express');

//http://localhost:3001/api
// Import our modular routers for notes
const notesRouter = require('./api/notes');

const router = express();

router.use('./api/notes', notesRouter);

module.exports = router;