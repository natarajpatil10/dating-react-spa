import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./Header.css";

const ThirdRow = () => {
  return (
    <div className="container-lg d-flex justify-content-between align-items-center mt-3">
      <Breadcrumb className="header-breadcrumb mr-2 col-md-3 ml-0 p-0">
        <Breadcrumb.Item href="#">
          Dating
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="d-flex ">
        <div className="d-flex align-items-center">
          <p className="mr-2 font-smaller third-row-p">
            We receive referral fees from partners{" "}
          </p>
          <div className="vertical-line" />
          <p className="ml-2 third-row-p">
            <a href="#">Advertising Disclosure</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;
