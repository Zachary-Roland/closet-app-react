import React, { useState, useContext } from "react";
import { Typography, TextField, Button, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);
  const history = useHistory();
  return (
    <Paper className="login">
      <form>
        <Typography variant="h3" component="h3">
          Login
        </Typography>
        <div className="loginItem">
          <TextField
            variant="outlined"
            label="Username:"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <div className="loginItem">
          <TextField
            variant="outlined"
            type="password"
            label="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: 10 }}
          onClick={(e) => {
            e.preventDefault();
            if (userInput.length > 4 && password.length > 4) {
              login(userInput);
              history.push("/addGarm");
            }
          }}
        >
          Log In!
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
