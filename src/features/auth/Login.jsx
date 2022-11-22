import React from 'react';
import Layout from '../../components/layout/Layout';
import { Button, Form, Card } from 'react-bootstrap';

function Login() {
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
                <Form.Control type="text" placeholder="Type username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Type password" />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
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
