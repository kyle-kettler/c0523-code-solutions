import { FormEvent } from 'react';

export default function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const objFromEntries = Object.fromEntries(formData.entries());
    console.log('entries', objFromEntries);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Uncontrolled</p>
      <label>
        Username
        <input name="username" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
