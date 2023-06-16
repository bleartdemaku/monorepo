import React, { useState } from "react";

import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const goBackToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="header">
      {location.pathname !== "/" && (
        <Button variant="text" onClick={goBackToHomePage}>
          Back
        </Button>
      )}
      <div className="header_content">
        <h3>Choose Service</h3>
        <h5>Steps {step}/2</h5>
      </div>
    </div>
  );
};

export default Header;
