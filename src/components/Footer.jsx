import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterMain>
      <div className="footer-c container">
        <div className="footer-box">
          <h2>Costy</h2>
          <div className="social">
            <a href="#" className="d-flex">
              <FaLinkedinIn className="icon" />
            </a>
            <a href="#" className="d-flex">
              <FaXTwitter className="icon" />
            </a>
            <a href="#" className="d-flex">
              <IoLogoInstagram className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-box">
          <h3>Help</h3>
          <a href="#">Contact Us</a>
          <a href="#">Faq</a>
          <a href="#">Shipment</a>
          <a href="#">Payment</a>
          <a href="#">Track Your Order</a>
          <a href="#">Return Your Order</a>
        </div>
        <div className="footer-box">
          <h3>Legal Info</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Return Policy</a>
          <a href="#">Comunity</a>
          <a href="#">Get Card</a>
        </div>
      </div>
      <div className="copyright container">&copy; Costy Studio</div>
    </FooterMain>
  );
};

export default Footer;

const FooterMain = styled.div`
  background-color: #1d18a8;
  padding: 40px 0;

  .footer-c {
    display: grid;
    grid-template-columns: 60% 20% 20%;
    gap: 2rem;

    .footer-box {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 8rem;
        color: var(--bg-color);
        text-transform: uppercase;
      }
      h3 {
        color: #fff;
        text-transform: uppercase;
      }
      a {
        color: #fff;
        font-size: 1rem;
        text-transform: uppercase;
        margin-top: 1rem;
      }
      .social {
        display: flex;
        align-items: center;
        column-gap: 1rem;

        a {
          background-color: #fff;
          padding: 10px;
          border-radius: 50%;
          .icon {
            color: #1d18a8;
            font-size: 18px;
          }
        }
      }
    }
  }
  .copyright {
    color: #fff;
    text-transform: uppercase;
    padding-top: 30px;
  }
`;
