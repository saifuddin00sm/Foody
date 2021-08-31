import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Foot = styled.footer`
  margin-top: 2rem;
  padding: 4rem 0rem;
  background-color: #1c2444;
  color: #f2f3fb;
  h5 {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.6;
  }
  ul {
    padding-left: 0;
    li {
      line-height: 1.8;
      list-style: none;
      a {
        text-decoration: none;
        text-transform: capitalize;
        font-size: 1rem;
        font-weight: 300;
      }
    }
  }
  .social {
    a {
      margin-right: 10px;
    }
  }
`;

const Footer = () => (
  <Foot>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="info">
            <h5>Info</h5>
            <ul>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Quality</a>
              </li>
              <li>
                <a href="/">Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="service">
            <h5>Service and terms</h5>
            <ul>
              <li>
                <a href="/">Terms and conditions</a>
              </li>
              <li>
                <a href="/">Our Policy</a>
              </li>
              <li>
                <a href="/">Business</a>
              </li>
              <li>
                <a href="/">Clients</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="Contact">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:example@gmail.com">Email: example@gmail.com</a>
              </li>
              <li>
                <a href="/">Phone: 839383833</a>
              </li>
              <li>
                <a href="/">FEX: 882992</a>
              </li>
              <li>
                <a href="/">Office: NewYork, 38 street</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="Subscribe">
            <h5>Subscribe with us to get all updates about cooking.</h5>
            <div className="form-group d-flex my-4">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Your Email"
              />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
            <div className="follow">
              <h5>Follow Us : </h5>
              <div className="social">
                <a href="/">
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Foot>
);

export default Footer;
