import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UG_section.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const UG_section = () => {
  const [key, setKey] = useState("home");

  return (
    <section className="programmes">
      <div className="programmes-container">
        <div className="programmes-title">
          <h2 className="tagh2">
            PROGRAMMES
          </h2>
        </div>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="UG_section-tabs"
          variant="pills"
        >
          <Tab
            eventKey="UG"
            title="B.Tech"
            className="UG_section-child"
            variant="danger"
          >
            {/* <div className="UG_section-tab-child-header">
              <h2 className="UG_section-tab-child-h2">
                UG Programmes
              </h2>
            </div> */}
            <div className="UG_section-tab-child-sub-header">
              <h3 className="UG_section-tab-child-h3">
                B. Tech. (Honours) with Specialization
              </h3>
            </div>
            <div className="UG_section-tab-child-list">
              <ul>
                <li className="list-elements">
                  Communication and Computer Engineering (CCE) with specialization in Artificial Intelligence & Data Science.
                </li>
                <li className="list-elements">
                  Computer Science and Engineering (CSE) with specialization in Artificial Intelligence & Data Science.
                </li>
                <li className="list-elements">
                  Mechanical Engineering (ME) with specialization in Robotics & Automation.
                </li>
              </ul>
              <hr />
            </div>
            <div className="UG_section-tab-child-sub-header">
              <h3 className="UG_section-tab-child-h3">
                B. Tech. with Minor
              </h3>
            </div>
            <div className="UG_section-tab-child-list">
              <ul>
                <li className="list-elements">
                  Communication and Computer Engineering (CCE) with minor in Robotics & Automation
                </li>
                <li className="list-elements">
                  Computer Science and Engineering (CSE) with minor in Robotics & Automation
                </li>
                <li className="list-elements">
                  Electronics and Communication Engineering (ECE) with minor in Robotics & Automation
                </li>
                <li className="list-elements">
                  Electronics and Communication Engineering (ECE) with Minor in Artificial Intelligence & Data Science
                </li>
                <li className="list-elements">
                  Mechanical Engineering (ME) with Minor in Artificial Intelligence & Data Science
                </li>
              </ul>
              <hr />
            </div>
            <div className="UG_section-tab-child-sub-header">
              <h3 className="UG_section-tab-child-h3">
                B. Tech.
              </h3>
            </div>
            <div className="UG_section-tab-child-list">
              <ul>
                <li className="list-elements">
                  Communication and Computer Engineering (CCE)
                </li>
                <li className="list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
                <li className="list-elements">
                  Mechanical Engineering (ME)
                </li>
              </ul>
              <hr />
            </div>
            {/* <div className="UG_section-tab-child-sub-header">
              <h3 className="UG_section-tab-child-h3">
                B.Tech. - M.Tech. (5 Year Integrated Dual Degree)
              </h3>
            </div>
            <div className="UG_section-tab-child-list">
              <ul>
                <li className="list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
              </ul>
              <hr />
            </div> */}
          </Tab>

          <Tab
            eventKey="PG"
            title="B.Tech-M.Tech (5-Year Integrated Dual Degree)"
            className="UG_section-tab-child"
            variant="danger"
          >
            
            <div className="UG_section-tab-child-sub-header">
              <h3 className="UG_section-tab-child-h3">
              B.Tech-M.Tech (5-Year Integrated Dual Degree)
              </h3>
            </div>
            <div className="UG_section-tab-child-list">
              <ul>
                <li className="list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default UG_section;