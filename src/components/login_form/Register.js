import Modal from '@mui/material/Modal';
import * as React from 'react';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

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

function Register() {
  const initialValues = {
    username: '',
    pwd: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    state: '',
    pincode: '',
    ispopup: 'false',
    popupMessage: ''
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    insertData(formValues);
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const errors = {};
    errors.iserror = false;
    if (!values.firstname) {
      errors.firstname = 'First Name is required';
      errors.iserror = true;
    }
    if (!values.lastname) {
      errors.lastname = 'Last Name is required';
      errors.iserror = true;
    }
    if (!values.username) {
      errors.username = 'Username is required';
      errors.iserror = true;
    }
    if (!values.pwd) {
      errors.pwd = 'Password is required';
      errors.iserror = true;
    }
    if (!values.email) {
      errors.email = 'email is required';
      errors.iserror = true;
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
      errors.iserror = true;
    }
    if (!values.address) {
      errors.address = 'Address is required';
      errors.iserror = true;
    }

    if (!values.pincode) {
      errors.pincode = 'Pincode is required';
      errors.iserror = true;
    } else if (values.pincode.length !== 6) {
      errors.pincode = 'Enter six digits';
      errors.iserror = true;
    }
    // console.log("is error", errors.)
    if (!errors.iserror) {
      values.ispopup = true;
      handleOpen();
    }
    return errors;
  };

  const insertData = (values) => {
    let a = JSON.parse(localStorage.getItem('all_users1'));
if(values.ispopup)
{
  if (a === null) {
    a = [values];
  } else {
    a.push(values);
  }

  localStorage.setItem('all_users1', JSON.stringify(a));

}
  
  };

  return (
    <div>
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
            maxWidth="sm"
            sx={{
              p: 1,
              pt: 2,
              bgcolor: 'info.main',
              display: 'flex',
              boxShadow: 24,
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: 400,
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
                  Registration Form
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  p: 1,
                  gap: 1,
                  m: 1,
                  pb: 0,
                  mb: 0,
                  borderRadius: 1
                }}>
                <TextField
                  sx={{
                    borderRadius: 1,

                    boxShadow: 14,
                    bgcolor: 'white'
                  }}
                  id="filled-basic"
                  label="First Name"
                  name="firstname"
                  fullWidth
                  margin="dense"
                  variant="filled"
                  value={formValues.firstname}
                  onChange={handleChange}
                />

                <TextField
                  sx={{
                    borderRadius: 1,

                    boxShadow: 14,
                    bgcolor: 'white'
                  }}
                  id="filled-basic"
                  label="Last Name"
                  name="lastname"
                  fullWidth
                  margin="dense"
                  variant="filled"
                  value={formValues.lastname}
                  onChange={handleChange}
                />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',

                  p: 1,
                  m: 1,
                  mb: 0,
                  mt: 0,
                  pt: 0,
                  borderRadius: 1
                }}>
<<<<<<< HEAD:src/components/login_form/Register.js
                <span data-testid="firstName_Error">{formErrors.firstname}</span>
=======
                <span>{formErrors.firstname}</span>
>>>>>>> 589098f25dbbddf86ad7d777cf2485b59fd11b3c:src/components/Register.js

                <TextField
                  sx={{
                    borderRadius: 1,
                    boxShadow: 14,
                    bgcolor: 'white'
                  }}
                  id="filled-basic"
                  label="User Name"
                  name="username"
                  fullWidth
                  margin="dense"
                  variant="filled"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <span data-testid="username_Error">{formErrors.username}</span>

                <TextField
                  sx={{
                    bgcolor: 'white',
                    boxShadow: 14,
                    borderRadius: 1,
                    color: 'text.primary'
                  }}
                  fullWidth
                  id="pwd-input"
                  label="Password"
                  name="pwd"
                  margin="dense"
                  variant="filled"
                  type="password"
                  autoComplete="current-password"
                  value={formValues.pwd}
                  onChange={handleChange}
                />
                <span data-testid="password_Error">{formErrors.pwd}</span>

                <TextField
                  sx={{
                    borderRadius: 1,
                    boxShadow: 14,
                    bgcolor: 'white'
                  }}
                  id="outlined-basic"
                  label="e-Mail ID"
                  name="email"
                  fullWidth
                  margin="dense"
                  variant="filled"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <span   data-testid="e-mail_Error">{formErrors.email}</span>

                <TextField
                  sx={{
                    borderRadius: 1,
                    boxShadow: 14,
                    bgcolor: 'white'
                  }}
                  id="outlined-basic"
                  label="Address"
                  name="address"
                  fullWidth
                  margin="dense"
              
                  variant="filled"
                  value={formValues.address}
                  onChange={handleChange}
                />
                <span   data-testid="Address_Error">{formErrors.address}</span>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  p: 1,
                  gap: 1,
                  m: 1,
                  pt: 0,
                  mt: 0,
                  pb: 0,
                  mb: 0,
                  borderRadius: 1
                }}>
                <FormControl
                  variant="filled"
                  value={''}
                  onChange={handleChange}
                  sx={{
                    minWidth: 120,
                    bgcolor: 'white',
                    borderRadius: 1,
                    p: 0,
                    m: 1,
                    ml: 0,
                    boxShadow: 14,
                    mt: 0,
                    mb: 2
                  }}>
                  <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={formValues.state}
                    onChange={handleChange}
                    label="State"
                    name="state">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'ap'}>Andhra Pradesh</MenuItem>
                    <MenuItem value={'delhi'}>Delhi</MenuItem>
                    <MenuItem value={'karnataka'}>Karnataka</MenuItem>
                    <MenuItem value={'kerala'}>Kerala</MenuItem>
                    <MenuItem value={'mumbai'}>Mumbai</MenuItem>
                    <MenuItem value={'tamilnadu'}>TamilNadu</MenuItem>
                    <MenuItem value={'up'}>Uttar Pradesh</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  sx={{
                    borderRadius: 1,
                    boxShadow: 14,
                    bgcolor: 'white',
                    m: 1,
                    mt: 0,
                    mb: 2
                  }}
                  id="basic"
                  label="Pincode"
                  name="pincode"
                  type="number"
                  fullWidth
                  margin="dense"
                  variant="filled"
                  value={formValues.pincode}
                  onChange={handleChange}
                />
              </Box>

              <Typography
                variant="h7"
                component="legend"
<<<<<<< HEAD:src/components/login_form/Register.js
                data-testid="Pincode_Error"
=======
>>>>>>> 589098f25dbbddf86ad7d777cf2485b59fd11b3c:src/components/Register.js
                sx={{ color: 'black', textAlign: 'right' }}>
                {formErrors.pincode}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  p: 1,
                  m: 1,

                  borderRadius: 1
                }}>
                <Button
                  data-testid="button"
                  variant="filled"
                  margin="dense"
                  type="submit"
                  sx={{
                    boxShadow: 20,
                    justifyContent: 'center',
                    bgcolor: 'success.main'
                  }}>
                  Register
                </Button>
              </Box>
            </Box>
          </Card>
        </div>
      </form>

      {formValues.ispopup ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Hello  {formValues.firstname}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Username {"\""}{formValues.username}{"\""} Registered Successfully
            </Typography>
          </Box>
        </Modal>
      ) : (
        ''
      )}

      {console.log(formValues.ispopup)}
      {console.log(formValues.popupMessage)}
    </div>
  );
}

export default Register;
