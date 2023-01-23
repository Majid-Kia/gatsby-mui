import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatIcon from '@mui/icons-material/Chat';
import CustomInput from '../input/CustomInput';
import CustomButton from '../button/CustomButton';
import PropTypes from 'prop-types';

const ContactForm = ({ submitForm, submitButtonText }) => {
  const [form, setFormItem] = useState({});
  const handleChange = (event) => {
    setFormItem((prevStage) => ({
      ...prevStage,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CustomInput
          id={'name'}
          label={'Your name*'}
          startIcon={<AccountCircleIcon />}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomInput
          id={'email'}
          label={'Email*'}
          startIcon={<MailOutlineIcon />}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomInput
          id={'message'}
          label={'Message'}
          startIcon={<ChatIcon />}
          multilineRows={6}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomButton
          color="primary"
          contentText={submitButtonText}
          fullWidth={true}
          variant="contained"
          onClick={() => submitForm(form)}
        />
      </Grid>
    </Grid>
  );
};

ContactForm.prototype = {
  submitForm: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
};

export default ContactForm;
