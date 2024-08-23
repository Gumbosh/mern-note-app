import React from 'react';
import { DisplayAllNotesProps } from '../../types/types';
import DeleteNoteButton from './DeleteNoteButton';
import EditNoteButton from './EditNoteButton';

const DisplayAllNotes: React.FC<DisplayAllNotesProps> = ({
  notes,
  fetchNotes,
}) => {
  return (
    <section className="flex flex-col gap-4">
      {notes.length > 0 ? (
        notes.map((note) => (
          <div
            key={note._id}
            className="border border-black flex justify-between items-center p-4"
          >
            <div>
              <h2 className="text-2xl">{note.title}</h2>
              <p>{note.text}</p>
            </div>
            <div className="flex gap-4">
              <EditNoteButton noteID={note._id} fetchNotes={fetchNotes} />
              <DeleteNoteButton noteID={note._id} fetchNotes={fetchNotes} />
            </div>
          </div>
        ))
      ) : (
        <p>No notes available</p>
      )}
    </section>
  );
};

export default DisplayAllNotes;
