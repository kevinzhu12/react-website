import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="header">Past Work</div>
      <a
        className="card mb-3"
        href="https://devpost.com/software/jabber-ai"
        target="_blank"
      >
        <div className="row no-gutters">
          <div className="col-md-4 text-hidden">
            <img
              src="assets/jabber-ai.png"
              className="card-img"
              alt="robust_image_classifier"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="project-date">June 2024</div>
              <div className="project-title">
                Jabber AI - AI project planning assistant - CalHacks AI
                Hackathon
              </div>
              <div className="project-description">
                Used Hume AI's EVI to design brainstorm assistant called Mindy.
                Jabber AI processes user transcripts with Mindy into note cards
                in the workspace. Mindy detects "spike" emotions and labels
                notes accordingly.
              </div>
            </div>
          </div>
        </div>
      </a>
      {/* Repeat similar structure for other projects */}
    </div>
  );
};

export default Projects;
