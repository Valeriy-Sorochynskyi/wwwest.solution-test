import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const LoggedInRoute = ({ component: Profile, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      render={() => (
        <Profile {...rest} />
      )}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

LoggedInRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LoggedInRoute);
