import { EditNoteButtonProps } from '../../types/types';
import { useState } from 'react';

const EditNoteButton: React.FC<EditNoteButtonProps> = ({
  noteID,
  fetchNotes,
  noteTitle,
  noteText,
}) => {
  const [newTitle, setNewTitle] = useState(noteTitle);
  const [newText, setNewText] = useState(noteText);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const editNoteHandler = async () => {
    await fetch(`http://localhost:4000/api/notes/${noteID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTitle, text: newText }),
    });
    setEditModalOpen(false);
    fetchNotes();
  };

  return (
    <>
      <button
        onClick={() => {
          setEditModalOpen(true);
        }}
      >
        Edit
      </button>
      {editModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 flex flex-col gap-4 w-[1440px]">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Title"
              className="border border-black"
            />
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Note"
              className="border border-black"
            />
            <div className="flex gap-4">
              <button
                onClick={editNoteHandler}
                className="border border-black self-center px-4 py-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditModalOpen(false)}
                className="border border-black self-center px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditNoteButton;
