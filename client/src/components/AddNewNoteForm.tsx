import React, { useState, Dispatch } from 'react';
import axios from 'axios';
import { NoteType } from '../../types/types';

type AddNewNoteFormProps = {
  setNotes: Dispatch<React.SetStateAction<NoteType[]>>;
};

const AddNewNoteForm: React.FC<AddNewNoteFormProps> = ({ setNotes }) => {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const addNoteHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/api/notes', {
      title,
      text,
    });
    setNotes((prevNotes) => [response.data, ...prevNotes]);
    setTitle('');
    setText('');
  };

  return (
    <form className="flex flex-col gap-4 pb-8" onSubmit={addNoteHandler}>
      <input
        type="text"
        placeholder="Title"
        className="border border-black p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note"
        className="border border-black p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="border border-black self-center px-4 py-2"
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNewNoteForm;
