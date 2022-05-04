import userEvent from '@testing-library/user-event';
import Login from './Login';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import user from '@testing-library/user-event';

describe('Login Form Component', () => {
  test('renders "Login Form" as a text', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const loginForm = screen.getByText('Login Form', { exact: true });
    expect(loginForm).toBeInTheDocument;
  });

  test('renders Username, password input field', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const userNameTextInput = screen.getByLabelText('UserName');
    const passwordTextInput = screen.getByLabelText('Password');
    expect(userNameTextInput).toBeInTheDocument;
    expect(passwordTextInput).toBeInTheDocument;
  });

  test('renders Login Button', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument;
  });

  test('Username, password input field are in editable state', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const userNameTextInput = screen.getByLabelText('UserName');
    const passwordTextInput = screen.getByLabelText('Password');
    expect(userNameTextInput).not.toHaveAttribute('disabled');
    expect(passwordTextInput).not.toHaveAttribute('disabled');
  });

  test('throws error for no data in Username, Password input field', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const userNameTextInput = screen.getByLabelText('UserName');
    const passwordTextInput = screen.getByLabelText('Password');

    userEvent.type(userNameTextInput, '');
    userEvent.type(passwordTextInput, '');

    const loginButton = screen.getByRole('button');
    user.click(loginButton);

    const loginForm = screen.getByTestId('modal-popup');
    expect(loginForm).toHaveTextContent(
      'Please check on below Username is requiredPassword is required',
      { exact: true }
    );
  });

  test('shows error when no User are registered', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const userNameTextInput = screen.getByLabelText('UserName');
    const passwordTextInput = screen.getByLabelText('Password');

    userEvent.type(userNameTextInput, 'Test');
    userEvent.type(passwordTextInput, 'test');

    const loginButton = screen.getByRole('button');
    user.click(loginButton);

    const loginForm = screen.getByTestId('modal-popup');
    expect(loginForm).toHaveTextContent('No Username Registered', { exact: true });

  });
});
