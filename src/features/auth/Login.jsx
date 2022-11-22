import React, { useEffect, useRef } from 'react';
import Layout from '../../components/layout/Layout';
import { Button, Form, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, authSelector } from '../../app/Auth/AuthSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const refUsername = useRef('');
  const refPassword = useRef('');
  const dispatch = useDispatch();
  const { token } = useSelector(authSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      console.log('token:', token);
      navigate('/');
    }
  }, [token]);

  const handlerLogin = () => {
    const data = {
      username: refUsername.current.value,
      password: refPassword.current.value,
    };
    dispatch(authLogin(data));
  };

  return (
    <Layout menu="login">
      <div className="py-5">
        <Card>
          <Card.Header className="bg-transparent">
            <h4 className="d-flex justify-content-center fw-bold">Login</h4>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  ref={refUsername}
                  type="text"
                  placeholder="Type username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={refPassword}
                  type="password"
                  placeholder="Type password"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => handlerLogin()}
                >
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
}

export default Login;
