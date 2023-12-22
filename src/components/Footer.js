import React from "react";
import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/alberttirtok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <Twitter />
        <Facebook />
        <LinkedIn />
        <p> &copy; 2023 albertpizza.com</p>
      </div>
    </div>
  );
};
