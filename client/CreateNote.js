import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    await axios.post('/api/notes', { content: this.state.content });
    this.setState({
      content: '',
    });
  }

  handleChange(evt) {
    this.setState({
      content: evt.target.value,
    });
  }

  render() {
    const { content } = this.state;
    const { handleSubmit } = this;

    return (
      <form id="note-form" onSubmit={handleSubmit}>
        <label htmlFor="content">Note Content:</label>
        <input name="content" value={content} onChange={this.handleChange} />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
