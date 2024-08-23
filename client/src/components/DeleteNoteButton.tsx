import { DeleteNoteButtonProps } from '../../types/types';

const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({
  noteID,
  fetchNotes,
}) => {
  const deleteNoteHandler = async () => {
    await fetch(`http://localhost:4000/api/notes/${noteID}`, {
      method: 'DELETE',
    });
    fetchNotes();
  };
  return (
    <button className="text-red-600" onClick={deleteNoteHandler}>
      Delete
    </button>
  );
};

export default DeleteNoteButton;
