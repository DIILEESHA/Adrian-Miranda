import React, { useState, useEffect } from "react";
import ams from "./assets/am.png";
import "./index.css";

const Pwd = ({ onCorrect }) => {
  const [password, setPassword] = useState("");
  const correctPassword = "gohange"; // Set your password

  // Check localStorage on mount
  useEffect(() => {
    const unlocked = localStorage.getItem("siteUnlocked");
    if (unlocked === "true") {
      onCorrect(); // Already unlocked
    }
  }, [onCorrect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      localStorage.setItem("siteUnlocked", "true"); 
      onCorrect(); // Unlock the site
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="pwd">
      <div className="gfd">
        <div className="pwd_card">
          <div className="amz">
            <div className="amzz">
              <img src={ams} alt="" className="am_ongs" />
            </div>
            <form className="amz" onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="Enter the password"
                className="am_input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="enter">
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pwd;