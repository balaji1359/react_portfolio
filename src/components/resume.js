import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "left", paddingLeft: "50px" }}>
              <img
                src="/img/balaji.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "0.75em" }}>Balaji Nagisetty</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I believe that I am a good learner. Failure are the best lessons.
              Everything can be learned and everyone can learn. For me
              understanding the principles of the nature and being part of it,
              is great opportunity given. I keep learn new things for building
              career and making new hobbies.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Moskauer Str 118, 99427</p>
            <h5>Phone</h5>
            <p>(+49) 176-86839996</p>
            <h5>Email</h5>
            <p>nagisetty.balaji@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2012}
              endYear={2017}
              schoolName="Ernst Abbe Hochschule Jena"
              schoolDescription="Master of Science in Scientific Instrumentation"
            />

            <Education
              startYear={2005}
              endYear={2009}
              schoolName="Nimra College of Engineering"
              schoolDescription="Bachelor of Technology in Mechanical Engineering"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2017}
              jobName="Job Search and Freelancer"
              jobCompany="HomeOffice"
              jobDescription="Scripted a few automated data mining and scraping projects. Developed an Vegetation tool. Learning new technologies."
            />

            <Experience
              startYear={2016}
              endYear={2017}
              jobName="Master Thesis"
              jobCompany="Fachhochschule Dortmund"
              jobDescription="
              Nanoparticle Characterization and Size Distribution with the State of Art Image Processing.
              Tools Used:
                  Python, Skimage, scipy, ImageJ, OpenCV."
            />
            <Experience
              startYear={2015}
              endYear={2015}
              jobName="Internship"
              jobCompany="Robert Bosch Hildesheim"
              jobDescription="Enhancement of labelled data handling with state of the art image processing
              Tools Used:
                    Matlab, Python, PYQT, MySQL.
              "
            />
            <Experience
              startYear={2014}
              endYear={2013}
              jobName="Internship"
              jobCompany="Allianz Global Investors"
              jobDescription="Acquisition of information.
              Developing KPI ( Key Performance Indicators).
              Reporting monthly KPIs.
              Actively participating in the daily business on ServiceNow.
              "
            />
            <hr style={{ borderTop: "3px solid #23074d" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={60} />
            <Skills skill="HTML/CSS" progress={60} />
            <Skills skill="Python" progress={80} />
            <Skills skill="React" progress={60} />
            <Skills skill="SQL" progress={75} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
