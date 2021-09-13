/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../logo.svg";
import Button from "react-bootstrap/Button";

export default function Homepage() {
  return (
    <div
      className="App d-flex justify-content-center align-items-center"
      style={{
        height: "100%",
        position: "absolute",
        left: "0px",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <div className="App-header container justify-content-center align-items-center">
        <h1 className="display-4 text-white text-center">Welcome To Logbook</h1>
        <p className="text-white fs-6 mb-4 text-muted text-center">
          Log, Track {`&`} Store Visitor Records{" "}
        </p>

        <div className="row">
          <div className="col text-center">
            <Button
              variant="outline-info"
              size="md"
              className="mt-4 text-center"
              style={{
                paddingRight: 100,
                paddingLeft: 100,
                alignSelf: "center",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
