import React, { Component } from 'react';

class Login extends Component {
  componentDidMount() {
    document.body.className = 'standard-page narrow-page';
  }

  render() {
    return (
      <div id="page">
        <main id="main-content" className="content-full" tabIndex="0">
          <section className="contain-1120">
            <h2>Login</h2>
            <p>Info goes here</p>
          </section>
        </main>
      </div>
    );
  }
}

export default Login;
