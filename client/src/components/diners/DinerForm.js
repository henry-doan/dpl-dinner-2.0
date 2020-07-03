import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class DinerForm extends Component {
  state = { name: '', address: '', hours: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addDiner(this.state)
    this.setState({ name: '', address: '', hours: '' })
  }

  render() {
    const { name, address, hours } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Diner Name'
          required
        />
        <Form.Input
          name='address'
          value={address}
          onChange={this.handleChange}
          label='Address'
          required
        />
        <Form.Input
          name='hours'
          value={hours}
          onChange={this.handleChange}
          label='Hours'
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default DinerForm;