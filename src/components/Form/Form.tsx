import React from 'react';

import { isValid } from '../../utils';

export interface FormProps {
  logoImageUrl: string;
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
      <main className="form-signin text-center w-100 m-auto">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-floating">
            <img
              className="mb-4"
              src={
                this.props.logoImageUrl ||
                'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-sample-market-research-flaticons-lineal-color-flat-icons.png'
              }
              width={72}
              height={72}
              alt="logo"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input
              onChange={this.handleEmailChange}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={this.state.email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              onChange={this.handlePasswordChange}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={this.state.password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                value="remember-me"
                onChange={this.handleCheckBoxChange}
              />{' '}
              Remember me
            </label>
          </div>
          <button
            className="w-100 bt btn-lg btn-primary"
            type="submit"
            onClick={this.handleSignInClick}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2022-Present</p>
        </form>
      </main>
    );
  }
}

export default Form;
