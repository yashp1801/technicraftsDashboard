import React from "react";
import "./Myaccount.css";
import { TextField, Box } from "@mui/material";
import Loader from "../../scenes/global/Loader";

const MyAccount = () => {
  return (
    <div className="myaccount">
      <div className="myaccount__container">
        <h1>My Account :</h1>
        <p style={{ borderBottom: "1px solid #797878" }}> Personal Details</p>
        <div className="myaccount__personalDetails__wrapper">
          <div className="myaccount__personalDetails__leftside">
            <span>
              Your personal information can be <br /> found on the right side.{" "}
            </span>
          </div>
          <div className="myaccount__personalDetails__rightside">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-error"
                  label="Username"
                  defaultValue="Hello World"
                  required
                />
                <TextField
                  id="outlined-error-helper-text"
                  label="Display Name"
                  defaultValue="Hello World"
                />
              </div>{" "}
              <div>
                <TextField
                  id="outlined-error-helper-text"
                  label="Contact Number"
                  type="number"
                  helperText="Please Enter Valid Number"
                />
              </div>
              <div>
                <TextField
                  id="outlined-error-helper-text"
                  label="Display Name"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                />
              </div>
              <input
                type="submit"
                value="Save"
                className="myaccount__personalDetails__rightside__submitBtn"
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
