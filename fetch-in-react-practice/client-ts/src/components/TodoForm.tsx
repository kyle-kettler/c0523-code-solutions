import { FormEvent, useState } from 'react';
import { UnsavedTodo } from './Todos';
import BeatLoader from 'react-spinners/BeatLoader'

type Props = {
  onSubmit: (todo: UnsavedTodo) => void;
  loading: boolean
};
export default function TodoForm({ onSubmit, loading }: Props) {
  // Note: Use a controlled form so we can easily reset it after submit.
  const [task, setTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newTodo = {
      task,
      isCompleted: false,
    };
    onSubmit(newTodo);
    setTask('');
  }

  const buttonLoader = loading ? <BeatLoader size={10} color={'#fff'}/> : 'Add Todo'

  return (
    <form className="input-group mb-4 shadow-sm" onSubmit={handleSubmit}>
      <input
        required
        autoFocus
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control"
        placeholder="What to do?"
      />
      <div className="input-group-append">
        <button style={{width: "100px"}} type="submit" className="btn btn-primary" disabled={loading}>
          {buttonLoader}
        </button>
      </div>
    </form>
  );
}
