import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <section className="footer_section">
      <ul>
        <li className="list-title">Timeshop</li>
        <li>timeshop@company.com</li>
        <li>+44 123 654 7890</li>
      </ul>
      <ul>
        <li className="list-title">Links</li>
        <li>About Us</li>
        <li>Choose Us</li>
        <li>Products</li>
        <li>Offer</li>
      </ul>
      <ul>
        <li className="list-title">Support</li>
        <li>Help Center</li>
        <li>Partners</li>
        <li>Suggestions</li>
        <li>Support Center</li>
        <li>News</li>
      </ul>
      <ul>
        <li className="list-title">Info</li>
        <li>Contact</li>
        <li>FAQ</li>
        <li>Privacy and Policy</li>
        <li>Co Orville Road 83</li>
        <li>California, USA</li>
        <li>
          <span>F</span>
          <span>G</span>
          <span>T</span>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
