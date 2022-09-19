const express = require('express');
//http://localhost:3001/api
//modular router for notes
const notesRouter = require('./notes');

const router = express();

router.use('/notes', notesRouter);

module.exports = router;