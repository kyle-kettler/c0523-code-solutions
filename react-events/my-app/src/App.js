import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick({ text }) {
    window.alert(`color is ${text}`);
  }

  return (
    <div>
      <CustomButton onCustomClick={handleCustomClick} color="red" text="red" />
      <CustomButton
        onCustomClick={handleCustomClick}
        color="green"
        text="green"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        color="blue"
        text="blue"
      />
    </div>
  );
}

export default App;
