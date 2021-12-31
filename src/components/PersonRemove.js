import React from 'react';
// import axios from 'axios';
import API from '../api';

export default class PersonRemove extends React.Component {
  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

//    async handleSubmit(event) {
//     event.preventDefault();

//     // axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
//     //   .then(res => {
//     //     console.log(res);
//     //     console.log(res.data);
//     //   })
//     // API.delete(`users/${this.state.id}`)
//     // .then(res => {
//     //   console.log(res);
//     //   console.log(res.data);
//     // })

//     const response = await API.delete(`users/${this.state.id}`);

//     console.log(response);
//     console.log(response.data);
//   }

   handleSubmit = event => {
    event.preventDefault();

    // axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    // API.delete(`users/${this.state.id}`)
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })

    const response = API.delete(`users/${this.state.id}`);

    console.log(response);
    console.log(response.data);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}