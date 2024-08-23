import { Dispatch } from 'react';

export type NoteType = {
  _id: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type EditNoteButtonProps = {
  noteID: NoteType['_id'];
  noteTitle: NoteType['title'];
  noteText: NoteType['text'];
  fetchNotes: () => void;
};

export type DeleteNoteButtonProps = {
  noteID: NoteType['_id'];
  fetchNotes: () => void;
};

export type AddNewNoteFormProps = {
  setNotes: Dispatch<React.SetStateAction<NoteType[]>>;
};

export type DisplayAllNotesProps = {
  notes: NoteType[];
  fetchNotes: () => void;
};
