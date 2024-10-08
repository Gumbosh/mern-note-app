const Note = require('../models/noteModel');
const mongoose = require('mongoose');

// Get all notes
const getNotes = async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.status(200).json(notes);
};

// Get a single note
const getNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such note' });
  }
  const note = await Note.findById(id);

  if (!note) {
    return res.status(404).json({ error: 'No such note' });
  }

  res.status(200).json(note);
};

// Create a note
const createNote = async (req, res) => {
  const { title, text } = req.body;
  try {
    const note = await Note.create({ title, text });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such note' });
  }
  const note = await Note.findByIdAndDelete(id);

  if (!note) {
    return res.status(400).json({ error: 'No such note' });
  }

  res.status(200).json(note);
};

// Update a note
const updateNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such note' });
  }
  const note = await Note.findByIdAndUpdate({ _id: id }, { ...req.body });
  if (!note) {
    return res.status(400).json({ error: 'No such note' });
  }
  res.status(200).json(note);
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
};
