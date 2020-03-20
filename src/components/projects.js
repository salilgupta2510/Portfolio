import React from "react";
import { NavLink } from "react-router-dom";
import PDF from "../docs/Salil Gupta_19_03_2020.pdf";
import "./projects.css";

function Projects(props) {
  return (
    <div className="Project">
      <div className="container">
        <header className="container-header">
          <h2 className="page-heading"> Previous Projects </h2>
          <NavLink className="navlink-home" to="/">
            {" "}
            Home{" "}
          </NavLink>
          <a className="download-resume" href={PDF} download>
            {" "}
            Download Resume
          </a>
        </header>
        <h3 className="project-type-name"> Mobile App (Android/iOS) </h3>
        <div className="type-react-native">
          <div className="col-md-6 project-item">
            <h3 className="project-heading"> Scan by QR </h3>
            <p className="project-details">
              This app is developed using React Native library for iOS & Android
              platform. The main idea behind this app is to enable the use to
              share any scanned QR over various types of mediums such as via
              sms, whatsapp, e-mail etc. TechStack: React-Native.
            </p>
          </div>
          <div className="col-md-6 project-item">
            <h3 className="project-heading"> Scheduling Application </h3>
            <p className="project-details">
              This app is developed using React Native library for iOS & Android
              platform. This is a scheduling application used by one of the
              largest Gas & Oil company in Canada. This helps scheduling the the
              load/unload of the oil from the facilities. TechStack:
              React-Native, Node, Parse Query Javascript, Azure.
            </p>
          </div>
        </div>
        <h3 className="project-type-name"> Web Application </h3>
        <div className="type-react-native">
          <div className="project-item">
            <h3 className="project-heading"> Release Automation Dashboard</h3>
            <p className="project-details">
              This dashboard provides functionality to trigger services on
              jenkins used for triggering the automated release process of an
              ecommerce website. TechStack: React Javascript, Node, Azure.
            </p>
          </div>
          <div className="project-item">
            <h3 className="project-heading">
              {" "}
              Predictive Analytics Dashboard{" "}
            </h3>
            <p className="project-details">
              This dashboard provides excel like functionality using Ag-Grid
              library. TechStack: React Javascript, Node, Ag-Grid, Azure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
