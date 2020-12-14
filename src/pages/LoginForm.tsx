import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

export const LoginForm = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" textAlign="center">
        Log-in to your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);
