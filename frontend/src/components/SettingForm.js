/**
 * in this component I created an formik form ,where user can change
  * his information 
 */
import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Image} from './Profilpic'
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
//I use this object to validate the entered phone number
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;
// here i define the elements of our form and the mandatory elements
let SettingsSchema = yup.object().shape({
  Name: yup.string().required("This field is required."),
  Surname: yup.string().required("This field is required."),
  Country:yup.string().required("This field is required."),
  City:yup.string().required("This field is required."),
  email: yup
    .string()
    .email()
    .required("This field is required."),
  PhoneNumber: yup
    .string()
    .required("This field is required.")
    .matches(phoneRegExp, 'Phone number is not valid')
});
// the style that we use in our form page
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export const SaveForm = () => {
  const classes = useStyles();

  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
       
      <div className={classes.paper}>
       
        <Formik
          //inisialisation
          initialValues={{
            Name: "",
            Surname: "",
            Country: "",
            City: "",
            email: "",
            PhoneNumber: ""
          }}
          validationSchema={SettingsSchema}
          //define the function that we will execute when the user submit the form
          onSubmit={values => {
            Save(values);
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid>
              <div className={classes.paper}><Image/></div>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.Name && touched.Name}
                    autoComplete="fname"
                    name="Name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="Name"
                    label="Name"
                    autoFocus
                    helperText={
                      errors.Name && touched.Name
                        ? errors.Name
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.Surname && touched.Surname}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="Surname"
                    label="Surname"
                    name="Surname"
                    autoComplete="lname"
                    helperText={
                      errors.Surname && touched.Surname
                        ? errors.Surname
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.Country && touched.Country}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="Country"
                    label="Country"
                    name="Country"
                    autoComplete="Country"
                    helperText={
                      errors.Country && touched.Country ? errors.Country : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.City && touched.City}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="City"
                    label="City"
                    name="City"
                    autoComplete="City"
                    helperText={
                      errors.City && touched.City ? errors.City : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.email && touched.email}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.PhoneNumber && touched.PhoneNumber}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    name="PhoneNumber"
                    label="Phone Number"
                    id="PhoneNumber"
                    autoComplete="PhoneNumber"
                    helperText={
                      errors.PhoneNumber && touched.PhoneNumber
                        ? errors.PhoneNumber
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <label>
                 <Field className="form-check-input" type="checkbox" name="checked" value="Email Alerts" />
                  Email Alerts
               </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                <label>
                 <Field className="form-check-input" type="checkbox" name="checked2" value="Sms Alerts" />
                  Sms Alerts
               </label>
                </Grid>
              </Grid>
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};
/**
* the function which allows us to send the 
* information entered to the server
 * @param values the object that contains the information entered by the user 
 */
function Save(values) {
  // prepare the request that we will send to the server
  let request=
  {
    email : values.email,
    first_name : values.Name,
    last_name : values.Surname,
    phonenumber : values.PhoneNumber,
    country : values.Country,
    city : values.City
  }
  // send the request to the server
  axios.post('http://localhost:3000/api/user/update',request)
  .then(res=>{
    alert(res.data.message)
  }).catch(err=>{
    alert(err)
  })
}