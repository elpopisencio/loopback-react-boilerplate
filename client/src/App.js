import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState();
  useEffect(() => {
    axios.get('/api/notes').then(({data}) => setNotes(data));
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  );
}

export default App;
