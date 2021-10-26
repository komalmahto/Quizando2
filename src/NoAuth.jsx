import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
} from "@mui/material";
function not_auth() {
  return (
    <div
      style={{
        alignItems: "center",
        textAlign: "center",

        width: "80%",
        margin: "150px auto",
        height: "30%",
        border: "1px solid black",
      }}
    >
      <h1>not authorised.Please Login</h1>
      <br />
      <h1>
        <a style={{ color: "var(--red)" }} className="anchor" href="/login">
          Login
        </a>{" "}
      </h1>
      {/* <Button>
        <a href="/login"></a>
        Login
      </Button> */}
    </div>
  );
}

export default not_auth;
