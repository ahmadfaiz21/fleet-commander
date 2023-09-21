// Signin.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './Signin.module.css';
const Signin = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const router = useRouter(); // Initialize the router

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
    if(formData.username=="admin"&&formData.password=="admin"){
      DummySignin(formData, router);
    }else if(formData.username=="admin"){
      alert("Invalid Password");
    }else if(formData.password=="admin"){
      alert("Invalid Username");
    }else{
      alert("Invalid Username and Password");
    }
  };
  

  return (
  <div className={styles.loginContainer}>
    <div className={styles.background}>
      <div className={styles.container}>
        <Container maxWidth="xs">
          <form onSubmit={handleSubmit}>
            <br/>
            <Typography variant="h4" align="center" gutterBottom>
              Control Center
            </Typography>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              margin="normal"
            />
            <Button

              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              Sign In
            </Button>
            
            
          </form>
        </Container>
        </div>
      </div>
    </div>
  );
};

export default Signin;

export function DummySignin(props,router) {
  const data = JSON.stringify(props);
  localStorage.setItem('dummySigninData', data);
  router.push('./'); // Return null or any other component JSX here
  return null;
}
