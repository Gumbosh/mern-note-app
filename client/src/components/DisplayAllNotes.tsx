import React from 'react';
import { NoteType } from '../../types/types';

type DisplayAllNotesProps = {
  notes: NoteType[];
};

const DisplayAllNotes: React.FC<DisplayAllNotesProps> = ({ notes }) => {
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
              <button>Edit</button>
              <button className="text-red-600">Delete</button>
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
