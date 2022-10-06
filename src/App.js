import logo from './logo.svg';
import './App.css';
import ComponentA from './components/componentA';
import { Contact } from './classes/contact';
import { ClockHook } from './components/clock';

function App() {
  // var newContact = new Contact ('Gemma', 'Batlle', 'gem@gmail.com', false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponentA contact={newContact}></ComponentA> */}
        <ClockHook></ClockHook>
      </header>
    </div>
  );
}

export default App;
