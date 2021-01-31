import React, { ChangeEvent, useContext, useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  InputOnChangeData,
  Message,
  Segment
} from 'semantic-ui-react';
import { RouteComponentProps } from '@reach/router';
import LoginContext from '../context/LoginContext';

interface IFormState {
  email: string;
  password: string;
  error: boolean;
}

const defaultFormState = {
  email: '',
  password: '',
  error: false
};

// eslint-disable-next-line no-unused-vars
export const LoginForm = (props: RouteComponentProps) => {
  const { setLoggedIn } = useContext(LoginContext);

  const [formState, setFormState] = useState<IFormState>(defaultFormState);

  const handleSubmit = () => {
    if (formState.email === 'admin' && formState.password === '123') {
      setFormState(defaultFormState);
      setLoggedIn(true);
    } else {
      setFormState({ ...formState, error: true });
    }
  };

  const handleChange = (
    _e: ChangeEvent<HTMLInputElement>,
    { name, value }: InputOnChangeData
  ) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit} error={formState.error}>
          {formState.error && (
            <Message
              error
              header="Login Failed!"
              content="Wrong email or password. Please check again."
            />
          )}
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              required
              value={formState.password}
              onChange={handleChange}
            />

            <Button fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
