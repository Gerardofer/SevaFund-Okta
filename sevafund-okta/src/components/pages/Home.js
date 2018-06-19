import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
  state = {authenticated: null}

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async () => {
    this.props.auth.login('/');
  }

  logout = async () => {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ?
      <div>
        <p className="lead">You are now logged in, <Link to="/staff"> click here </Link>to visit your portal</p>
        <button className="btn btn-light btn-lg" onClick={this.logout}>Log Out</button>
      </div> :
      <div>
        <p className="lead">If you have created an account please reset your password</p>
        <button className="btn btn-dark btn-lg" onClick={this.login}>Log In</button>
      </div>;

    return (
      <div className="jumbotron">
        <h1 className="display-4">SevaFun Portal</h1>
        {mainContent}
      </div>
    );
  }
});