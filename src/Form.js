import React from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChage = this.handleChage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChage(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('A new name has been submitted' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChage}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

const Form = () => {
  return (
    <div>
      <NameForm />
    </div>
  );
};
export default Form;
