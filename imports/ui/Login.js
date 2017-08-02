import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 5) {
        return this.setState({error: 'Password must be greater than 5 characters.'})
    }

    Meteor.loginWithPassword({email}, password, (err) => {
      if(err) {
          this.setState({error: 'Unable to login. Check email and password'});
      } else {
          this.setState({error: ''});
      }
    })
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view_box">
          <h1>Short Lnk</h1>

            {this.state.error ? <p>{this.state.error}</p> : undefined}

            <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view_form">
                <input type="email" ref="email" name="email" placeholder="Email"/>
                <input type="password" ref="password" name="password" placeholder="Password"/>
                <button className="button" >Login</button>
            </form>

          <Link to="/signup"> Don't have an account? Then signup! =)</Link>
        </div>
      </div>
    );
  }
}