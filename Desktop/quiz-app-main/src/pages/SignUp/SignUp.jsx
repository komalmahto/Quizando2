import {
  Typography,
  TextField,
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { React, useState } from "react";
import "../../styles/pages/LogIn.css";
import { useDispatch } from "react-redux";
import registerUser from "../../Actions/user_actions";
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

function SignUp({ user }) {
  const dispatch = useDispatch();
  const [field, setField] = useState({});
  const history = useHistory();
  const handleSubmit = (e) => {
    console.log(field);

    dispatch(registerUser(field)).then((response) => {
      if (user.register && user.register.payload.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.payload.payload.token)
        );
        console.log(user.register.payload.user);
      }

      console.log(user);
      if (response.payload.payload.token) {
        history.push("/playQuiz");
      } else {
        alert("error");
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
  //console.log(user);
  return (
    <div className="signupContainer">
      <div className="signupWrapper">
        <div className="header__wrapper">
          <div className="heading">
            <h2 className="header__title">
              <span style={{ fontFamily: "Paytone One" }}>
                Sign up to Quizando
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
              Already a Quizando player?{" "}
              <a
                style={{ color: "var(--red)" }}
                className="anchor"
                href="/login"
              >
                Login
              </a>{" "}
              to start playing!
            </Typography>
            <hr />
            <Typography variant="h5">
              Sign up to Quizando with your social media account or fill in the
              details below
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
                  <i class="fa fa-facebook-f"></i>{" "}
                  <h5 className="h5__title">Sign up with Facebook</h5>
                </Button>
                <Button
                  className="signupButton "
                  fullWidth
                  color="google"
                  variant="contained"
                >
                  <i className="fa fa-google"></i>{" "}
                  <h5 className="h5__title">Sign up with Facebook</h5>
                </Button>
                <Button
                  className="signupButton facebook"
                  fullWidth
                  color="twitter"
                  variant="contained"
                >
                  <i className="fa fa-twitter"></i>{" "}
                  <h5 className="h5__title">Sign up with Twitter</h5>
                </Button>
                <Button
                  className="signupButton facebook"
                  fullWidth
                  color="ASKGAMBLERS"
                  variant="contained"
                >
                  <h5 className="h5__title">Sign up with ASKGAMBLERS</h5>
                </Button>
              </ThemeProvider>
            </div>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {[
              {
                displayName: "First Name",
                Name: "firstName",
              },
              {
                displayName: "Last Name",
                Name: "lastName",
              },
              {
                displayName: " Username",
                Name: "username",
              },
              {
                displayName: "Email",
                Name: "email",
              },
              {
                displayName: "Password",
                Name: "password",
              },
              {
                displayName: "Confirm Password",
                Name: "confirm Password",
              },
            ].map((item, val) => {
              return (
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label={item.displayName}
                    fullWidth
                    name={item.Name}
                    onChange={handleOnChange}
                    variant="outlined"
                    key={val}
                  />
                </Grid>
              );
            })}
          </Grid>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              onChange={handleOnChange}
              required
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
              <FormControlLabel
                value="nil"
                control={<Radio />}
                label="Preffer not to say"
              />
            </RadioGroup>
          </FormControl>
          <ThemeProvider theme={theme}>
            <Button
              className="signin__button"
              fullWidth
              variant="contained"
              color="button_color"
              onClick={handleSubmit}
            >
              SignUp
            </Button>
          </ThemeProvider>

          <Typography>
            By signing up, you agree to Quizando's <span>Privacy Policy</span> &{" "}
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

export default connect(mapStateToProps)(SignUp);
