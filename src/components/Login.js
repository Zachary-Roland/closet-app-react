import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <form>
        <Typography variant="h3" component="h3">
          Login
        </Typography>
        <TextField
          variant="outlined"
          label="Username:"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
    </>
  );
};

export default Login;
