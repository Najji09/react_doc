import './App.css';
import ComponentProps from './Component_Props';
import Clock from './State_life_Cycle';
import HandlingEvents from './HandlingEvents';
import LoginControl from './conditional_rendering';
import ListKey from './List_Key';
import Form from './Form';
import LiftingState from './Lifting_state';
import ComponentInheritence from './Composition_inheritence';
import ThinkingReact from './thinking_react';

function App() {
  return (
    <div className="App">
      <ComponentProps />
      <Clock />
      <HandlingEvents />
      <LoginControl />
      <ListKey />
      <Form />
      <LiftingState />
      <ComponentInheritence />
      <ThinkingReact />
    </div>
  );
}

export default App;
