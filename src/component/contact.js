import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()   
     const { email, subject, message } = this.state   

      let templateParams = {
      from_name: email,
      to_name: 'rishabkhanna27@gmail.com',
      subject: subject,
      message_html: message,
     }     

     emailjs.send(
      'gmail',
      'template_S7HesOnZ',
       templateParams,
      'user_GyBvh6DmcxUrbtxhIiDFO'
     )     
     this.resetForm()
 }
 resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <>
        <div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup><FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup><FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup><FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Message"
              />
            </FormGroup><Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
    )
  }
}export default ContactForm