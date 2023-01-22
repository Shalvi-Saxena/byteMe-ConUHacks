
import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ loggedUser }) => {
  return (
    <Navigate to={loggedUser.isLoggedIn ? '/dashboard' : '/login'} />
  );
}

const mapStateToProps = ({ loggedUser }) => {
  return {
    loggedUser,
  };
}

export default connect(mapStateToProps)(Home);