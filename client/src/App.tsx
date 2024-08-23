import axios from 'axios';
import { useEffect, useState } from 'react';
import AddNewNoteForm from './components/AddNewNoteForm';
import { NoteType } from '../types/types';
import DisplayAllNotes from './components/DisplayAllNotes';
import Navbar from './components/Navbar';

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get('http://localhost:4000/api/notes');
      setNotes(response.data);
    };
    fetchNotes();
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] m-auto px-4">
        <AddNewNoteForm setNotes={setNotes} />
        <DisplayAllNotes notes={notes} />
      </main>
    </>
  );
}

export default App;
