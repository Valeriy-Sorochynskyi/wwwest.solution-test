import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logIn } from '../redux/actions/actions';

const userData = {
  login: 'admin',
  password: 12345,
};

const Login = ({ logInConnect }) => {
  const [loginValue, setLoginvalue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isError, setError] = useState(false);

  const onChangeHandler = (e) => {
    setError(false);
    if (e.target.name === 'login') {
      setLoginvalue(e.target.value);
    }

    if (e.target.name === 'password') {
      setPasswordValue(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (loginValue === userData.login && +passwordValue === userData.password) {
      logInConnect();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="mx-auto col-lg-5 p-2 rounded text-center shadow mt-5"
      >
        <h2 className="text-center">Sign in</h2>
        {/* <label htmlFor="login">Login</label> */}
        <input
          id="login"
          type="text"
          name="login"
          className="form-control mb-2"
          placeholder="Login"
          value={loginValue}
          onChange={e => onChangeHandler(e)}
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          id="password"
          type="password"
          name="password"
          className="form-control mb-2"
          placeholder="Password"
          value={passwordValue}
          onChange={e => onChangeHandler(e)}
        />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      {isError && (
        <div
          className="alert alert-danger w-50 mx-auto mt-3"
          role="alert"
        >
          The username or password you entered is incorrect!
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = {
  logInConnect: logIn,
};

Login.propTypes = {
  logInConnect: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
