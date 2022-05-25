 

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Welcome from './Welcome';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useAuth } from './Utils/auth';
import * as React from 'react';

/* eslint-disable */

function Login() {
  const auth = useAuth();

  const initialValues = { username: '', pwd: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  let navigate = useNavigate();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  // const arr = {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));

    if (!formErrors.isError && formValues.username && formValues.pwd) {
      setFormErrors(formAuthentication(formValues));
    }
  };

  const validate = (values) => {
    const errors = {};
    errors.isError = false;
    if (!values.username) {
      errors.username = 'Username is required';
      errors.isError = true;
      errors.isPopup = true;
      handleOpen();
    }
    if (!values.pwd) {
      // errors.pwd=values.pwd.toUpperCase;

      errors.pwd = 'Secret Key  is required';
      errors.isError = true;
      errors.isPopup = true;
      handleOpen();
    }

    return errors;
  };

  const formAuthentication = (values) => {
    let data = JSON.parse(localStorage.getItem('all_users1'));
    const errors = {};

    if (values.username != null) {
      if (data === null) {
        errors.username = 'No Username Registered';
        errors.isPopup = true;
        handleOpen();
        return errors;
      } else {
        const curr_data = data.find(({ username }) => username === values.username);
        console.log('Curr data', values.pwd);
        console.log('Curr data', curr_data);

        if (!curr_data) {
          errors.username = 'Username Not Registered';
          errors.isError = true;

          errors.isPopup = true;
          handleOpen();
        } else if (values.pwd === curr_data.pwd) {
          auth.login(values.username);

          
            navigate('/welcome', { state: { name: values.username } });
            <Welcome />;
          
        } else {
          errors.pwd = 'Invalid Secret Key  Try correct Secret Key';
          errors.isError = true;
          errors.isPopup = true;
          handleOpen();
        }

        localStorage.setItem('all_users1', JSON.stringify(data));
        return errors;
      }
    }
  };

  const NewError = () => {
    throw new Error(' inappropriate data in fields!!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="App"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
        <Card
          variant="outlined"
          // maxWidth="sm"
          sx={{
            p: 5,
            bgcolor: 'info.main',
            display: 'flex',
            boxShadow: 24,
            flexWrap: 'wrap',
            justifyContent: 'center',
            // maxWidth: 250,
            borderRadius: 5,

            m: 1
          }}>
          <Box component="span" sx={{ p: 0, bgcolor: 'info.main' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,

                borderRadius: 1
              }}>
              <Typography variant="h5" component="legend" sx={{ color: 'white' }}>
                Login Form
              </Typography>
            </Box>
            <TextField
              sx={{
                borderRadius: 1,
                boxShadow: 14,
                bgcolor: 'white'
              }}
              id="outlined-basic"
              label="UserName"
              data-testid="user_name"
              fullWidth
              margin="dense"
              name="username"
              variant="filled"
              value={formValues.username}
              onChange={handleChange}
            />

            <TextField
              sx={{
                bgcolor: 'white',
                boxShadow: 14,
                borderRadius: 1,

                color: 'text.primary'
              }}
              name="pwd"
              fullWidth
              id="pwd-input"
              label="Password"
              margin="dense"
              variant="filled"
              type="password"
              value={formValues.pwd}
              onChange={handleChange}
              autoComplete="current-pwd"
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,

                borderRadius: 1
              }}>
              <Button
                variant="contained"
                margin="dense"
                type="submit"
                sx={{
                  boxShadow: 20,
                  justifyContent: 'center',
                  bgcolor: 'success.main'
                }}>
                Login
              </Button>
            </Box>
          </Box>
        </Card>
      </div>
      {formErrors.isError ? NewError() : ''}
      {formErrors.isPopup ? (
        <div>
          <Modal
            open={open}
            data-testid="modal-popup"
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Please check on below{' '}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, ml: 5 }}>
                {formErrors.username}
                <br />
                {formErrors.pwd}
              </Typography>
            </Box>
          </Modal>
        </div>
      ) : (
        ' '
      )}
    </form>
  );
}

export default Login;
