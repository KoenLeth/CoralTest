import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  input: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60%',
    },
  },
}));

const ContactInfo = () => {


  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid')
  });

  return <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={() => { }}
    validationSchema={validationSchema}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} className={classes.input}>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl></Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              error={touched && errors.email}
              helperText={errors.email} 
              placeholder="example@mail.ru"/>
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.input}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
        </Grid>
      </form>
    )}
  </Formik>
}

export default ContactInfo;