import React from 'react';

import { isValid } from '../../utils';

export interface FormProps {
  onFormSubmit: (e: any) => any;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onCheckBoxChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onSignInClick: (e: any) => any;
}

export interface FormState {
  email: string;
  password: string;
}

class Form extends React.Component<FormProps, FormState, any> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleFormSubmit = (e: any) => {
    if (isValid(this.state.email, this.state.password)) {
      this.props.onFormSubmit(e);
    } else {
      e.preventDefault();
      alert('Credentials are not valid.');
    }
  };

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
    this.props.onEmailChange(e);
  };

  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
    this.props.onPasswordChange(e);
  };

  handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onCheckBoxChange(e);
  };

  handleSignInClick = (e: any) => {
    this.props.onSignInClick(e);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-floating">
          <input
            onChange={this.handleEmailChange}
            type="email"
            className="form-control"
            id="floatingInputz"
            placeholder="name@example.com"
            value={this.state.email}
          />
          <label htmlFor="floatingInputz">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={this.handlePasswordChange}
            type="password"
            className="form-control"
            id="floatingPasswordz"
            placeholder="Password"
            value={this.state.password}
          />
          <label htmlFor="floatingPasswordz">Password</label>
        </div>
        <button
          className="w-100 bt btn-primary"
          type="submit"
          onClick={this.handleSignInClick}
        >
          Sign in
        </button>
      </form>
    );
  }
}

export default Form;
