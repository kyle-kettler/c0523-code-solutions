import React from 'react';
import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div>
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
