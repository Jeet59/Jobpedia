import React from "react";
import appleLogo from "../assets/apple_logo.png";
import googleLogo from "../assets/google_logo.png";
import teslaLogo from "../assets/tesla_logo.png";
import dell from "../assets/dell_logo.png";
import netflix from "../assets/netlflix_logo.png";
import amazon from "../assets/amazon_logo.png";
import twitter from "../assets/twitter_logo.png";
import hirerImage from "../assets/businessuser.jpg";
import candidate1Image from "../assets/candidate1.jpeg";
import candidate2Image from "../assets/candidate2.jpg";

export default function Home() {
  return (
    <div>
      <div className="container-custom text-center">
        <h1 className="welcome-heading">Welcome to Jobpedia</h1>
        <p className="welcome-text">
          Your source for finding the best talent and opportunities
        </p>
        <div className="statistics">
          <div className="stat-box">
            <h2>500+</h2>
            <p>Companies</p>
          </div>
          <div className="stat-box">
            <h2>2000+</h2>
            <p>Jobs Posted</p>
          </div>
          <div className="stat-box">
            <h2>1500+</h2>
            <p>Candidates</p>
          </div>
        </div>
      </div>
      <section className="how-to-use">
        <h2>How to Use</h2>
        <ul className="tree">
          <li>
            For Companies
            <ul>
              <li>Create an account</li>
              <li>Post job listings</li>
              <li>Browse candidate profiles</li>
            </ul>
          </li>
          <li>
            For Candidates
            <ul>
              <li>Create an account</li>
              <li>Build your profile</li>
              <li>Apply to job listings</li>
            </ul>
          </li>
        </ul>
      </section>
      <div className="trusted-section">
        <h1 className="section-heading">Trusted by Leading Tech Giants</h1>
        <div className="tech-giants">
          <img src={appleLogo} alt="Apple" />
          <img src={amazon} alt="Amazon" />
          <img src={googleLogo} alt="Google" />
          <img src={netflix} alt="Netflix" />
          <img src={teslaLogo} alt="Tesla" />
          <img src={twitter} alt="Twitter" />
          <img src={dell} alt="Dell" />
        </div>
      </div>
      <div className="user-reviews-section">
        <h2 className="section-heading">What our users say about us...</h2>
        <div className="user-reviews">
          <div className="user-review">
            <img src={candidate1Image} alt="Candidate 1" />
            <h3>Jack Ryan</h3>
            <p>
              Excellent platform to find job opportunities. I found my dream job
              through this portal.
            </p>
          </div>
          <div className="user-review">
            <img src={candidate2Image} alt="Candidate 2" />
            <h3>Quentin Tarantino</h3>
            <p>
              Highly recommended for both job seekers and employers. The process
              is efficient and easy to use.
            </p>
          </div>
          <div className="user-review">
            <img src={hirerImage} alt="Hirer" />
            <h3>Al Pacino</h3>
            <p>
              As an employer, I've found exceptional talents for my team through
              this platform. It's been a game-changer for us.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer">
          <p>
            <span className="footer-link">About Us</span> |
            <span className="footer-link">Contact</span> |
            <span className="footer-link">Privacy Policy</span> |
            <span className="footer-link">Terms & Conditions</span> |
            <span className="footer-link">FAQ</span> |
            <span className="footer-link">Career</span> |
            <span className="footer-link">Feedback</span>
          </p>
        </div>
      </div>
    </div>
  );
}
