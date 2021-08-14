// Imports for React
import React, { useState, useContext, useEffect } from "react";
// Imports for Material UI
import { Typography, TextField, Button, Paper, Slide } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// Imports for Context
import { UserContext } from "../context";
import useFetch from "../hooks/useFetch";

const Login = () => {
  // states for username and password fields
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const defaultErr = "Must be between 4 and 20 characters";
  const [errorMsg, setErrorMsg] = useState(defaultErr);
  const { callAPI: loginCall } = useFetch("POST");
  // state for animation
  const [load, setLoad] = useState(true);
  // importing login function
  const { login } = useContext(UserContext);
  // used to navigate on login
  const history = useHistory();
  // A useEffect so that on component unmount, exit animation is triggered.
  useEffect(() => {
    return () => setLoad(false);
  }, []);
  return (
    <Slide
      direction={load ? "right" : "left"}
      in={load}
      mountOnEnter
      unmountOnExit
    >
      <Paper className="margin10 compCenter" style={{ minHeight: "415px" }}>
        <form>
          <Typography variant="h3" component="h3">
            Login
          </Typography>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <Typography variant="body2" style={{ maxWidth: "280px" }}>
              Hello, welcome to My Garms! If you'd like to demo this app with
              pre-existing examples, just use 'testuser' & 'password' to log in.
            </Typography>
          </div>
          <div className="margin50" style={{ minHeight: "80px" }}>
            <TextField
              variant="outlined"
              style={{ minWidth: 250 }}
              error={errorUser}
              helperText={errorUser ? errorMsg : null}
              label="Username:"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div style={{ minHeight: "80px" }}>
            <TextField
              variant="outlined"
              style={{ minWidth: 250 }}
              type="password"
              error={errorPass}
              helperText={errorPass ? errorMsg : null}
              label="Password:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ marginTop: 50 }}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginBottom: 10, marginRight: 5 }}
              onClick={async () => {
                setErrorUser(false);
                setErrorPass(false);
                if (
                  username.length > 4 &&
                  password.length > 4 &&
                  username.length <= 20 &&
                  password.length <= 20
                ) {
                  setErrorUser(false);
                  setErrorPass(false);
                  let res = await loginCall("/api/users/login", {
                    username,
                    password,
                  });
                  if (res.data) {
                    setLoad(false);
                    console.log(res.data.username, res.data.id);
                    setTimeout(() => {
                      login(res.data.username, res.data.id);
                      history.push("/addGarm");
                    }, 500);
                  } else {
                    setErrorMsg("Invalid username or password");
                    setErrorUser(true);
                    setErrorPass(true);
                  }
                }
                if (username.length <= 4 || username.length > 20) {
                  setErrorMsg(defaultErr);
                  setErrorUser(true);
                }
                if (password.length <= 4 || password.length > 20) {
                  setErrorMsg(defaultErr);
                  setErrorPass(true);
                }
              }}
            >
              Log In!
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginBottom: 10, marginLeft: 5 }}
              onClick={() => {
                history.push("/signup");
              }}
            >
              Create an Account
            </Button>
          </div>
        </form>
      </Paper>
    </Slide>
  );
};

export default Login;
