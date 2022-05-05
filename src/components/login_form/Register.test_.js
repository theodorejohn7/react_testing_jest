import user, userEvent from '@testing-library/user-event';
import Register from './Register';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Registration Form Component', () => {
  test('renders "Registration Form" as a text', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const registerForm = screen.getByText('Registration Form', { exact: true });
    expect(registerForm).toBeInTheDocument;
  });

  test('renders the input fields', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const firstNameInput = screen.getByLabelText('First Name');
    expect(firstNameInput).toBeInTheDocument;

    const lastNameInput = screen.getByLabelText('Last Name');
    expect(lastNameInput).toBeInTheDocument;

    const userNameInput = screen.getByLabelText('User Name');
    expect(userNameInput).toBeInTheDocument;

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument;

    const eMailIdInput = screen.getByLabelText('e-Mail ID');
    expect(eMailIdInput).toBeInTheDocument;

    const addressInput = screen.getByLabelText('Address');
    expect(addressInput).toBeInTheDocument;

    const stateInput = screen.getByLabelText('State');
    expect(stateInput).toBeInTheDocument;

    const pincodeInput = screen.getByLabelText('Pincode');
    expect(pincodeInput).toBeInTheDocument;
  });

  test('rendered fields are in editable state', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const userNameInput = screen.getByLabelText('User Name');
    const passwordInput = screen.getByLabelText('Password');
    const eMailIdInput = screen.getByLabelText('e-Mail ID');
    const addressInput = screen.getByLabelText('Address');
    const stateInput = screen.getByLabelText('State');
    const pincodeInput = screen.getByLabelText('Pincode');

    expect(firstNameInput).not.toHaveAttribute('disabled');
    expect(lastNameInput).not.toHaveAttribute('disabled');
    expect(userNameInput).not.toHaveAttribute('disabled');
    expect(passwordInput).not.toHaveAttribute('disabled');
    expect(eMailIdInput).not.toHaveAttribute('disabled');
    expect(addressInput).not.toHaveAttribute('disabled');
    expect(stateInput).not.toHaveAttribute('disabled');
    expect(pincodeInput).not.toHaveAttribute('disabled');
  });

  test('shows error when no data entered in the fields', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const firstNameInput = screen.getByLabelText('First Name');
    const userNameInput = screen.getByLabelText('User Name');
    const passwordInput = screen.getByLabelText('Password');
    const eMailIdInput = screen.getByLabelText('e-Mail ID');
    const addressInput = screen.getByLabelText('Address');
    const pincodeInput = screen.getByLabelText('Pincode');

    userEvent.type(firstNameInput, '');
    userEvent.type(userNameInput, '');
    userEvent.type(passwordInput, '');
    userEvent.type(eMailIdInput, '');
    userEvent.type(addressInput, '');
    userEvent.type(pincodeInput, '');

    const registerButton = screen.getByTestId('button');
    user.click(registerButton);

    const firstName_Error = screen.getByTestId('firstName_Error');
    expect(firstName_Error).toHaveTextContent('First Name is required', { exact: true });

    const username_Error = screen.getByTestId('username_Error');
    expect(username_Error).toHaveTextContent('Username is required', { exact: true });

    const password_Error = screen.getByTestId('password_Error');
    expect(password_Error).toHaveTextContent('Password is required', { exact: true });

    const mail_Error = screen.getByTestId('e-mail_Error');
    expect(mail_Error).toHaveTextContent('email is required', { exact: true });

    const Address_Error = screen.getByTestId('Address_Error');
    expect(Address_Error).toHaveTextContent('Address is required', { exact: true });

    const Pincode_Error = screen.getByTestId('Pincode_Error');
    expect(Pincode_Error).toHaveTextContent('Pincode is required', { exact: true });
  });

  test('throws error for in-valid e-mail Id format', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const eMailIdInput = screen.getByLabelText('e-Mail ID');
    userEvent.type(eMailIdInput, 'Test');

    const registerButton = screen.getByTestId('button');
    user.click(registerButton);

    const mail_Error = screen.getByTestId('e-mail_Error');
    expect(mail_Error).toHaveTextContent('This is not a valid email format!', { exact: true });

    userEvent.type(eMailIdInput, 'Test@test');
    const registerButton2 = screen.getByTestId('button');
    user.click(registerButton2);
    const mail_Error2 = screen.getByTestId('e-mail_Error');
    expect(mail_Error2).toHaveTextContent('This is not a valid email format!', { exact: true });
  });

  test('accepts valid e-mail Id format', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const eMailIdInput = screen.getByLabelText('e-Mail ID');
    userEvent.type(eMailIdInput, 'Test@test.com');

    const registerButton = screen.getByTestId('button');
    user.click(registerButton);

    const mail_Error = screen.getByTestId('e-mail_Error');
    expect(mail_Error).toHaveTextContent('', { exact: true });
  });


  test('throws error for invalid Pincode format', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const pincodeInput = screen.getByLabelText('Pincode');
    userEvent.type(pincodeInput, '1234');

    const registerButton = screen.getByTestId('button');
    user.click(registerButton);

    const Pincode_Error = screen.getByTestId('Pincode_Error');
    expect(Pincode_Error).toHaveTextContent('Enter six digits', { exact: true });

    userEvent.type(pincodeInput, '123');
    user.click(registerButton);
    expect(Pincode_Error).toHaveTextContent('Enter six digits', { exact: true });

    userEvent.type(pincodeInput, '1234');
    user.click(registerButton);
    expect(Pincode_Error).toHaveTextContent('Enter six digits', { exact: true });

  });


  test('accepts valid Pincode format', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const pincodeInput = screen.getByLabelText('Pincode');
    userEvent.type(pincodeInput, '123456');

    const registerButton = screen.getByTestId('button');
    user.click(registerButton);

    const Pincode_Error = screen.getByTestId('Pincode_Error');
    expect(Pincode_Error).toHaveTextContent('', { exact: true });
    });

});
