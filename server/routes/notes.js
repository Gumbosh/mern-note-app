const express = require('express');
const {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
} = require('../controllers/noteController');
const router = express.Router();

// Get all notes
router.get('/', getNotes);

// Get a single note
router.get('/:id', getNote);

// Create a note
router.post('/', createNote);

// Delete a note
router.delete('/:id', deleteNote);

// Update a note
router.patch('/:id', updateNote);

module.exports = router;
