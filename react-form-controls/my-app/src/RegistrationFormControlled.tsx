import { FormEvent, useState } from 'react';

export default function RegistrationFormUncontrolled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const entries = new Map([
      ['username', username],
      ['password', password],
    ]);

    const objFromEntries = Object.fromEntries(entries);
    console.log('state', objFromEntries);
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
