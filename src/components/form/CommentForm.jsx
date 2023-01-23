import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatIcon from '@mui/icons-material/Chat';
import CustomInput from '../input/CustomInput';
import CustomButton from '../button/CustomButton';
import PropTypes from 'prop-types';
import RequestUtil from '../../util/request.util';
import FrontMatterContext from '../../context/FrontMatter.context';
import CustomSnackbar from '../snackbar/CustomSnackbar';

const FormInputs = ({ handleChange }) => {
  return (
    <Grid container spacing={{ md: 2, xs: 3 }}>
      <Grid item xs={12} md={6}>
        <CustomInput
          id={'name'}
          label={'Your name*'}
          startIcon={<AccountCircleIcon />}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <CustomInput
          id={'email'}
          label={'Email*'}
          startIcon={<MailOutlineIcon />}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} mt={0.5}>
        <CustomInput
          id={'message'}
          label={'Message'}
          startIcon={<ChatIcon />}
          multilineRows={6}
          handleChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

FormInputs.prototype = {
  handleChange: PropTypes.func,
};

const CommentForm = ({ titleElement, cleanUp, parentId }) => {
  const slug = useContext(FrontMatterContext)?.slug;
  const [form, setFormItem] = useState({});
  const handleChange = (event) => {
    setFormItem((prevStage) => ({
      ...prevStage,
      [event.target.id]: event.target.value,
    }));
  };
  const [snackbarData, setSnackbarData] = useState({
    isOpen: false,
    message: '',
    severity: 'success',
  });

  const handleSnackbarClose = () =>
    setSnackbarData((prev) => ({ ...prev, isOpen: false }));

  const submitForm = (form) => {
    return RequestUtil.postAsync(
      {
        parentId: parentId || 0,
        slug,
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'comment-form',
    );
  };

  const resetForm = () => setFormItem({});

  const handleSubmitForm = () => {
    if (form.message.length > 500) {
      setSnackbarData({
        isOpen: true,
        severity: 'error',
        message: 'Your comment is too long.',
      });
      return;
    }
    submitForm(form)
      .then((res) => {
        setSnackbarData({
          isOpen: true,
          severity: 'success',
          message: 'Your comment is awaiting moderation.',
        });
        cleanUp && cleanUp();
        resetForm();
      })
      .catch((err) => {
        setSnackbarData({
          isOpen: true,
          severity: 'error',
          message: 'Your message could not be sent.',
        });
      });
  };

  return (
    <Grid mt={!!cleanUp && 1.5}>
      {!cleanUp && (
        <Grid item xs={12}>
          {titleElement}
        </Grid>
      )}
      <Grid item xs={12} mt={2}>
        <FormInputs handleChange={handleChange} />
      </Grid>
      <Grid item xs={12} mt={2.5}>
        <CustomButton
          color="secondary"
          contentText={'POST COMMENT'}
          variant="contained"
          onClick={() => handleSubmitForm()}
        />
        {!!cleanUp && (
          <CustomButton
            contentText={'CANCEL'}
            sx={{ ml: 1.5, color: (theme) => theme.palette.grey[400] }}
            onClick={() => {
              cleanUp();
              resetForm();
            }}
          />
        )}
      </Grid>
      <CustomSnackbar
        onClose={handleSnackbarClose}
        message={snackbarData.message}
        isOpen={snackbarData.isOpen}
        severity={snackbarData.severity}
      />
    </Grid>
  );
};

CommentForm.prototype = {
  titleElement: PropTypes.element,
  cleanup: PropTypes.func,
  parentId: PropTypes.number,
};

export default CommentForm;
