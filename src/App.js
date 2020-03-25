import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { checkAuthentication as checkAuth } from './redux/actions/actions';
import { Home } from './components/Home';
import { News } from './components/News';
import { Profile } from './components/Profile';
import Login from './components/Login';
import LogoutBtn from './components/LogoutBtn';
import LoggedInRoute from './routes/LoggedInRoute';
import LoggedOutRoute from './routes/LoggedOutRoute';

function App({ checkAuthentication, isAuthenticated }) {
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <Router basename="/wwwest.solution-test">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            App
          </Link>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <LogoutBtn />
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <LoggedInRoute exact path="/profile" component={Profile} />
          <LoggedOutRoute exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = {
  checkAuthentication: checkAuth,
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  checkAuthentication: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
