import React from "react";

const Profile = () => {
  return (
    <div>
      <img
        id="profile"
        className="text-hidden"
        src="assets/headshot.png"
        alt="Picture of Kevin Zhu"
        height="300"
        width="300"
      />
      <div className="about">
        <div className="header">Hi, I'm Kevin. 👋</div>
        <div>
          Currently studying computer science and math at
          <a href="https://web.mit.edu/">MIT</a>. This summer I'm interning at
          <a href="https://www.llnl.gov/">Lawrence Livermore National Lab</a> as
          a Data Science/Machine Learning intern with the computational biology
          group.
        </div>
        <ul>
          <li>
            <a href="https://github.com/kevinzhu12" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kevin-zhu1284" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="mailto:kbzhu@mit.edu">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="assets/resume_6_17.pdf" target="_blank">
              <i className="fas fa-file"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
