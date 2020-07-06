import React, { Component } from 'react';
import image1 from '../assests/intro.jpg'
import firestore from "./firestore";
import firebase from 'firebase';
import {Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import '../App.css';

export class Checkout extends Component {
    constructor() {
        super();
        this.state = {
        email: "",
        fullname: "",
        pnumber: "",
        city: "",
        address: ""
        };
      }
      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("Hotel-site").add({
          fullname: this.state.fullname,
          email: this.state.email,
          pnumber: this.state.pnumber,
          city: this.state.city,
          address: this.state.address
        });  
        console.log(userRef, firestore);

        this.setState({
          fullname: "",
          email: "",
          pnumber: "",
          city: "",
          address: ""
        });
      };
      handleFormSubmit(e) {
        // e.preventDefault();
          if(this.fullname!==undefined && this.email!==undefined && this.pnumber!==undefined && this.city!==undefined && this.address!==undefined){
      Swal.fire({
        html: ' <br/> <b>Yeah! You Have Ordered Successfully</b><br/>',
        title: 'GrubEats',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
        footer: 'Made by Rishab Khanna',
      })
    }
    else{
        Swal.fire({
            html: ' <br/> <b>Please Fill the Form </b><br/>',
            title: 'GrubEats',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'OK',
            footer: 'Made by Rishab Khanna',
          })
    }
}
  render() {
    return (
      <div>
        <div className="container1">
        <img className="intro" src={image1} alt="intro"/>
        <div className="heading1"><b>Grub<span>Eats</span></b></div>
        </div> 
        <div className="formhead">Fill Your Address</div><br></br>
        <form className="formmain" onSubmit={this.addUser}>

              <input
              required
              type="text"
              name="fullname"
              placeholder="Full name"
              onChange={this.updateInput}
              value={this.state.fullname}
            />{' '}
            <input
              required
              type="email"
              name="email"
              placeholder="Email Id"
              onChange={this.updateInput}
              value={this.state.email}
            /><br></br><br></br>
            <input
              required
              type="number"
              name="pnumber"
              placeholder="Phone Number"
              onChange={this.updateInput}
              value={this.state.pnumber}
            />{' '}
            <input
              required
              type="text"
              name="city"
              placeholder="City Name"
              onChange={this.updateInput}
              value={this.state.city}
            /><br></br><br></br>
            <input
              className="address"
              required
              type="message"
              name="address"
              placeholder="Address"
              onChange={this.updateInput}
              value={this.state.address}
            /><br></br><br></br>
            <Button onClick={e => this.handleFormSubmit(e)} variant="primary" type="submit">Confirm Order</Button><br></br><br></br>
            <Link to="/"><Button variant="success">Home Page</Button></Link>
        </form>

        </div>
        )
}
}
export default Checkout;