// Imports for React
import React, { useState, useContext, useEffect } from "react";
// Imports for Material UI
import { Typography, TextField, Button, Paper, Slide } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// Imports for Context
import { UserContext } from "../context";
import useFetch from "../hooks/useFetch";

const Signup = ({ setValue }) => {
  // states for username and password fields
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const defaultErr = "Must be between 5 and 20 characters";
  const [errorMsg, setErrorMsg] = useState(defaultErr);
  const { callAPI: signupCall } = useFetch("POST");
  // state for animation
  const [load, setLoad] = useState(true);
  // used to navigate on successful signup
  const history = useHistory();
  // A useEffect so that on component unmount, exit animation is triggered.
  useEffect(() => {
    setValue(1);
    return () => setLoad(false);
  }, []);
  return (
    <Slide
      direction={load ? "right" : "left"}
      in={load}
      mountOnEnter
      unmountOnExit
    >
      <Paper className="margin10 compCenter">
        <form>
          <Typography variant="h4" component="h4">
            Signup
          </Typography>
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
          <div className="margin50" style={{ minHeight: "80px" }}>
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
          <div className="margin50" style={{ minHeight: "80px" }}>
            <TextField
              variant="outlined"
              style={{ minWidth: 250 }}
              type="password"
              error={errorPass}
              helperText={errorPass ? errorMsg : null}
              label="Confirm Password:"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
            />
          </div>
          <div>
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
                  if (password !== confirm) {
                    setErrorPass(true);
                    setErrorMsg("Passwords do not match!");
                  } else {
                    let res = await signupCall("/api/users/signup", {
                      username,
                      password,
                    });
                    if (res.success) {
                      setLoad(false);
                      //   console.log(res.data.username, res.data.id);
                      setTimeout(() => {
                        history.push("/login");
                      }, 500);
                    } else {
                      setErrorMsg("Username already taken");
                      setErrorUser(true);
                    }
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
              Create an Account!
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginBottom: 10, marginLeft: 5 }}
              onClick={() => {
                setValue(0);
                history.push("/login");
              }}
            >
              Log In
            </Button>
          </div>
        </form>
      </Paper>
    </Slide>
  );
};

export default Signup;
