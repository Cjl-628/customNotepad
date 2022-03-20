import React, { Component } from 'react';
import axios from 'axios';

export default class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/notes');
    this.setState({ notes: data });
  }

  render() {
    const notesList = this.state.notes;
    if (!notesList.length) {
      return <div>There are no notes!</div>;
    } else {
      return (
        <div>
          <ul>
            {notesList.reverse().map((note) => {
              return (
                <li key={note.id}>
                  <p>{note.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}
