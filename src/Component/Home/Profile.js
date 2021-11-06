import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz text-center ">
            <a href="#">
              <i className="fab fa-instagram-square"></i>
            </a>

            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>

            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>

            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>

          <div className="profile-details-name text-center">
            <span className="primary-text">
              {""}
              Hello, I'm{" "}
              <span className="highlighted-text">Fahmi Ali Husni</span>
            </span>
          </div>

          <div className="profile-details-role text-center">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Developer💻",
                    5000,
                    "Full Stack Developer🖥️",
                    5000,
                    "Ui/Ux Designer🖌️",
                    5000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Selamat datang di halaman portfolio Fahmi.
              </span>
            </span>
          </div>
          <div className="profile-options text-center">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Assets/Image/Home/CV_Fahmi.pdf" download="CV_Fahmi.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
