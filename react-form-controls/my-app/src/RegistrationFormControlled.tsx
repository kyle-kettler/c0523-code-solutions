import { FormEvent, useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('controlled state', { username, password });
    setPassword('');
    setUsername('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Controlled</p>
      <label>
        Username
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
