import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <>
      <Link to="/login">Home</Link>
      <h1>Login Page</h1>
    </>
  );
};

export default LoginPage;
