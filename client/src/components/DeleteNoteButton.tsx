import { NoteType } from '../../types/types';

type DeleteNoteButtonProps = {
  noteID: NoteType['_id'];
  fetchNotes: () => void;
};

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
