import { Alert, Button } from '@mui/material';
import '../../assets/css/Login.css';
import pic from '../../assets/images/gardeningpic1.gif';
import { Link } from 'react-router-dom';
import Input from '@mui/joy/Input';



function Login(){

  return (
    <div className="login-container" style={{backgroundColor:'#0A4938'}}> 
      <div className='container'>
      <form className="login-form">
        
        <h4 className='heading' style={{paddingBottom:'10px'}}>The Plant Palette</h4>
        <h2 style={{paddingBottom:'10px'}}>Login</h2>
        <label  style={{marginTop:'10px'}} htmlFor="username">Email</label>
        <Input sx={{borderRadius:'20px'}}
          type="email"
          id="email"
        />
        <label style={{marginTop:'10px'}} htmlFor="password">Password</label>
        <Input sx={{borderRadius:'20px'}}
          type="password"
          id="password"
        />
        <br />
        <Link sx={{paddingBottom:'10px' }} to="/"><span style={{color:'blue'}}>Forgot Password?</span></Link>
        <Link sx={{paddingBottom:'10px'}} to="/">
        <br />
        <Button variant='contained' style={{width:'100%', margin:'10px',marginLeft:'0px', borderRadius:'20px'}} type="button" >
          Login
        </Button>
        </Link>
        <p style={{paddingBottom:'10px'}}>New customer? <Link to="/register"><span style={{color:'blue'}}>Create your account</span></Link></p>
      </form>
      <div>
        <img style={{marginTop:'40px'}} src={pic} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Login;
