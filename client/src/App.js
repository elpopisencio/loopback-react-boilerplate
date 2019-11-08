import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState();
  useEffect(() => {
    axios.get('/api/notes').then(({data}) => setNotes(data));
  }, []);
  return (
    <BrowserRouter>
      <Route path="/api" component={Api} />
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </BrowserRouter>
  );
}

export default App;

const Api = () => <div>API</div>;
