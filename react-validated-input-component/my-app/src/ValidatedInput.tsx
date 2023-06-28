import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState<string>('');
  const empty = password.length === 0;
  const valid = password.length > 7;

  const hide = empty ? '' : 'd-none';
  const show = empty ? 'd-none' : '';
  const icon = valid ? 'fa-check' : 'fa-xmark';
  const color = valid ? 'green' : 'red';
  const validText = valid ? '' : 'Your password is too short';

  return (
    <div className="container mt-4">
      <form className="col">
        <label className="form-label">
          <p>Password</p>
          <div className="d-flex align-items-center column-gap-3 mb-1">
            <input
              className="form-control"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <i
              className={`fa-solid ${icon}`}
              style={{ color: `${color}`, marginLeft: '0.5rem' }}></i>
          </div>
          <p className={hide} style={{ color: 'red' }}>
            A password is required
          </p>
          <p className={show} style={{ color: 'red' }}>
            {validText}
          </p>
        </label>
      </form>
    </div>
  );
}
