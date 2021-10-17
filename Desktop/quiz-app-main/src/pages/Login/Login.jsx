import {
  Typography,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Stack,
} from "@mui/material";
import "../../styles/pages/LogIn.css";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import loginUser from "../../Actions/user_actions";
import { connect } from "react-redux";
import { useHistory } from "react-router";
const theme = createTheme({
  palette: {
    facebook: {
      main: "var(--darkblue)",
    },
    google: {
      main: "var(--light)",
    },
    twitter: {
      main: "var(--sblue)",
    },
    ASKGAMBLERS: {
      main: "var(--sred)",
    },
    button_color: {
      main: "var(--ored)",
    },
  },
});

function Login({ user }) {
  const dispatch = useDispatch();
  const [field, setField] = useState({});
  const history = useHistory();
  const handleSubmit = async (e) => {
    console.log(field);
    //dispatch(loginUser(field));
    await dispatch(loginUser(field)).then((response) => {
      if (user.register && user.register.payload.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.payload.payload.token)
        );
        console.log(user.register.payload.user);
      }

      console.log(response.payload.payload.token);
      if (
        response.payload.payload.token &&
        user.register &&
        user.register.payload.user
      ) {
        history.push("/playQuiz");
      } else {
        alert("PLease Login Again");
      }
    });
  };
  const handleOnChange = (e) => {
    const name = e.target.name;
    setField((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };
  console.log(user);
  return (
    <div className="signupContainer">
      <div className="signupWrapper">
        <div className="header__wrapper">
          <div className="heading">
            <h2 className="header__title">
              <div className="quiz__icon">
                <img
                  style={{ maxWidth: "50px" }}
                  src="https://s3.eu-west-2.amazonaws.com/quizando-dev-images/question_images/977ce665-17c6-477d-9e24-8e919db7f468.jpeg"
                  alt=""
                />
              </div>
              <span style={{ fontFamily: "Paytone One" }}>
                Login to Quizando
              </span>
            </h2>
          </div>
        </div>
        {/* <h1 style={{ color: "pink" }}>
            {" "}
            {user.register.payload.user.firstName}
          </h1> */}
        <div className="SignupInput">
          <div>
            <Typography variant="h5">
              Login to Quizando with your social media account or email address
            </Typography>
          </div>
          <div className="outbuttonContainer">
            <div className="">
              <ThemeProvider theme={theme}>
                <Button
                  className="signupButton facebook"
                  color="facebook"
                  fullWidth
                  variant="contained"
                >
                  <i class="fa fa-facebook-f"></i>
                  <h5 className="h5__title">Sign in with Facebook</h5>
                </Button>
                <Button
                  className="signupButton "
                  fullWidth
                  color="google"
                  variant="contained"
                >
                  <i className="fa fa-google"></i>{" "}
                  <h5 className="h5__title">Sign in with Google</h5>
                </Button>
                <Button
                  className="signupButton facebook"
                  fullWidth
                  color="twitter"
                  variant="contained"
                >
                  <i className="fa fa-twitter"></i>{" "}
                  <h5 className="h5__title">Sign in with Twitter</h5>
                </Button>
                <Button
                  className="signupButton facebook"
                  fullWidth
                  color="ASKGAMBLERS"
                  variant="contained"
                >
                  <h5 className="h5__title">Sign in with ASKGAMBLERS</h5>
                </Button>
              </ThemeProvider>
            </div>
          </div>

          <Stack direction="column" spacing={2}>
            {[
              {
                displayName: " Username",
                Name: "username",
              },
              {
                displayName: "Password",
                Name: "password",
              },
            ].map((item, val) => {
              return (
                <TextField
                  id="outlined-basic"
                  label={item.displayName}
                  fullWidth
                  name={item.Name}
                  onChange={handleOnChange}
                  variant="outlined"
                  key={val}
                />
              );
            })}
          </Stack>
          <p style={{ margin: "1em 0 0 0", fontSize: "1.6em" }}>
            New to Quizando? Click here to{" "}
            <span style={{ color: "var(--cyan)" }}>
              <a className="anchor" href="/signup">
                Sign up.
              </a>
            </span>
          </p>
          <ThemeProvider theme={theme}>
            <Button
              className="signin__button"
              fullWidth
              variant="contained"
              color="button_color"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </ThemeProvider>
          {/* <Button className="signin__button" variant="contained">
            Sign in
          </Button> */}

          <Typography>
            By signing in, you agree to Quizando's <span>Privacy Policy</span> &{" "}
            <span>Terms & Conditions.</span>
          </Typography>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    check:
      state.user && state.user.register && state.user.register.payload.user,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Login);
