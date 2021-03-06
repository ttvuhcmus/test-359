import React from "react";
import { FooterStyles } from "./styles/FooterStyles";
import { Container } from "../../styles/Container";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <Container center column>
          <img src="/img/logo.png" alt="logo" className="footer__image" />
          <p className="footer__text">
            Extremely we promotion remainder eagerness enjoyment an. Ham her
            demands removal bought minuter raising invited gay.
          </p>
          <ul className="footer__list-icon">
            <li className="footer__item center">
              <a href="#" className="footer__link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="footer__item center">
              <a href="#" className="footer__link">
                <i className="fab fa-twitter footer__icon"></i>
              </a>
            </li>
            <li className="footer__item center">
              <a href="#" className="footer__link">
                <i className="fab fa-linkedin-in footer__icon"></i>
              </a>
            </li>
            <li className="footer__item center">
              <a href="#" className="footer__link">
                <i className="fab fa-pinterest-p footer__icon"></i>
              </a>
            </li>
          </ul>
          <span className="footer__note">All Right Reserved by PixelsUi</span>
        </Container>
      </div>
    </FooterStyles>
  );
};

export default Footer;
