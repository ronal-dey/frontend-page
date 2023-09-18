import GoogleAuth from "./GoogleAuth";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
// import Card from "../components/card";
import "./sign-in.css";

const SignIn = () => {
  return (
    <a className="sign-in">
      <section className="right-side" />
      <img className="left-side-icon" alt="" src="/left-side.svg" />
      <h1 className="board1">Board.</h1>

      <form className="login-form">
        {/* <Card /> */}
        <div className="input-field">
          <TextField
            className="input-field1"
            color="primary"
            label="Label"
            size="medium"
            placeholder="Placeholder"
            required={true}
            sx={{ width: 356.77020263671875 }}
            variant="filled"
            type="text"
          />
        </div>
        <TextField
          className="input"
          color="primary"
          size="medium"
          placeholder="johndoe@gmail.com"
          sx={{ width: 356.77020263671875 }}
          variant="outlined"
          type="text"
        />
        <div className="div">••••••••</div>
        <div className="login-form-child" />
        <Button
          className="button-sign-in"
          sx={{ width: 356.77020263671875 }}
          color="primary"
          size="medium"
          variant="contained"
        >
          Sign In
        </Button>
        <div className="email-address">Email address</div>
        <div className="johndoegmailcom">johndoe@gmail.com</div>
        <div className="password">Password</div>
        <div className="forgot-password">Forgot password?</div>
        <div className="dont-have-an-container">
          <span className="dont-have-an">{`Dont have an account? `}</span>
          <span className="register-here">Register here</span>
        </div>
      </form>
      <div className="rt999" style={{position:"relative",zIndex:"999"}}>{<GoogleAuth></GoogleAuth>}</div>
      <div className="apple-sign-in">
        <div className="white1">
          <div className="button" />
        </div>
        <div className="sign-in-with">Sign in with Apple</div>
        <img className="apple-1-icon" alt="" src="/apple-1.svg" />
      </div>
      <h1 className="sign-in1">Sign In</h1>
      <div className="sign-in-to">Sign in to your account</div>
      <h3 className="logo">LOGO</h3>
      <div className="vector-parent">
        <img className="vector-icon1" alt="" src="/vector6.svg" />
        <img className="vector-icon2" alt="" src="/vector7.svg" />
        <a className="carbonlogo-linkedin">
          <img className="vector-icon3" alt="" src="/vector8.svg" />
        </a>
        <a className="carbonlogo-discord">
          <img className="vector-icon4" alt="" src="/vector9.svg" />
          <img className="vector-icon5" alt="" src="/vector10.svg" />
        </a>
      </div>
    </a>
  );
};

export default SignIn;
