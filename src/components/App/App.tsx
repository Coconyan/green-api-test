import React from 'react';
import './App.css';
import LoginForm from '../login-form/login-form';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/data/selectors';
import ChatForm from '../chat-form/chat-form';

function App() {
  const user = useAppSelector(getUser);

  return (
    <div className="App">
      <div className="App-green-line" />
      <header className="App-content">
        {!user
          ? <LoginForm />
          : <ChatForm />}
      </header>
    </div>
  );
}

export default App;
