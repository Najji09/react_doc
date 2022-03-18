import React from 'react';

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked Submit.');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }
}

const HandlingEvents = () => {
  return (
    <div>
      <Form />
      <Toggle />
    </div>
  );
};

export default HandlingEvents;
