import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/actions';

const LogoutBtn = ({ logOutConnect }) => (
  <button
    type="button"
    className="btn btn-link"
    onClick={() => logOutConnect()}
  >
    Logout
  </button>
);

const mapDispatchToProps = {
  logOutConnect: logOut,
};

LogoutBtn.propTypes = {
  logOutConnect: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LogoutBtn);
