import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './Login.css'
import Header from '../../common/header/Header'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      usernameError: false,
      password: "",
      passwordError: false,
      loginError: false
    }
  }

  inputChangeHandler = ({target: {id, value}}) => {
    this.setState({ [id]: value });
  }

  loginSubmitHandler = () => {
    const instagramAccessToken = "IGQVJVQUY1X0dyM0I2Ty1oQ2xZANVAtakVLcGVCUWVRNHVDUENMQjlnQ1ZAzR18zNjJRQ2wzQkxqTlZAXTFNuSWI0V2lhbDZAQMFM2SEtoNzAtUjBLb3hDVVlVSFRVb0hVU0VtenBWRWE1LWRNLXhFZAnFFZAHFEZAUcteTdRT1Uw";
    const username = "prajwal";
    const password = "upgrad123";

    this.setState(state => ({
      usernameError: state.username === "",
      passwordError: state.password === "",
    }))

    this.setState(state => ({
      loginError: state.username !== username || state.password !== password
    }))

    if (this.state.usernameError || this.state.passwordError || this.state.loginError) {
      return;
    }

    localStorage.setItem('access-token', instagramAccessToken);
    this.props.history.push('/home')
  }

  render() {
    return (
      <div>
        <Header />
        <div className='login-card-container'>
          <Card className='login-card'>
            <CardContent>
              <FormControl fullWidth='true'>
                <Typography variant='h6'>LOGIN</Typography>
                <br />
                <FormControl required>
                  <InputLabel htmlFor='username'>Username</InputLabel>
                  <Input type='text' id='username' onChange={this.inputChangeHandler} value={this.state.username} />
                  <FormHelperText className={this.state.usernameError ? 'displayBlock' : 'displayNone'}>
                    <span className='red'>required</span>
                  </FormHelperText>
                </FormControl>
                <br />
                <FormControl required>
                  <InputLabel htmlFor='password'>Password</InputLabel>
                  <Input type='password' id='password' onChange={this.inputChangeHandler} value={this.state.password} />
                  <FormHelperText className={this.state.passwordError ? 'displayBlock' : 'displayNone'}>
                    <span className='red'>required</span>
                  </FormHelperText>
                </FormControl>
                <br />
                <FormHelperText className={this.state.loginError ? 'displayBlock' : 'displayNone'}>
                    <span className='red'>Incorrect username and/or password</span>
                  </FormHelperText>
                <br />
                <Button className='login-button' variant='contained' color='primary' onClick={this.loginSubmitHandler}>Login</Button>
              </FormControl>
            </CardContent>
          </Card>
        </div>
      </div> 
    )
  }
}

export default withRouter(Login);
