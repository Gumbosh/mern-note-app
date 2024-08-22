import axios from 'axios';
import { useEffect, useState } from 'react';

type Note = {
  _id: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get('http://localhost:4000/api/notes');
      setNotes(response.data);
    };
    fetchNotes();
  }, []);
  return (
    <main>
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.text}</p>
          </div>
        ))
      ) : (
        <p>No notes available</p>
      )}
    </main>
  );
}

export default App;
