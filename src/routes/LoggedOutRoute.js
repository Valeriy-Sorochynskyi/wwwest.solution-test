import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const LoggedOutRoute = ({ component: Login, isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <Route
      render={() => (
        <Login {...rest} />
      )}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

LoggedOutRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(LoggedOutRoute);
