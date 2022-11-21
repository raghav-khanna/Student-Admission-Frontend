import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sections.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Sections = () => {
  const [key, setKey] = useState("UG");

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
          className="sections-tabs"
          variant="pills"
        >
          <Tab
            eventKey="UG"
            title="UG Programmes"
            className="sections-child"
            variant="danger"
            e
          >
            <div className="sections-tab-child-header">
              <h2 className="sections-tab-child-h2">
                UG Programmes
              </h2>
            </div>
            <div className="sections-tab-child-sub-header">
              <h3 className="sections-tab-child-h3">
                B. Tech. (Honours) with Specialization
              </h3>
            </div>
            <div className="sections-tab-child-list">
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
            <div className="sections-tab-child-sub-header">
              <h3 className="sections-tab-child-h3">
                B. Tech. with Minor
              </h3>
            </div>
            <div className="sections-tab-child-list">
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
            <div className="sections-tab-child-sub-header">
              <h3 className="sections-tab-child-h3">
                B. Tech.
              </h3>
            </div>
            <div className="sections-tab-child-list">
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
            <div className="sections-tab-child-sub-header">
              <h3 className="sections-tab-child-h3">
                B.Tech. - M.Tech. (5 Year Integrated Dual Degree)
              </h3>
            </div>
            <div className="sections-tab-child-list">
              <ul>
                <li className="list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
              </ul>
              <hr />
            </div>
          </Tab>

          <Tab
            eventKey="PG"
            title="PG Programmes"
            className="sections-tab-child"
            variant="danger"
          >
            <div className="sections-tab-child-header">
              <h2 className="sections-tab-child-h2">
                PG Programmes
              </h2>
            </div>
            <div className="sections-tab-child-sub-header">
              <h3 className="sections-tab-child-h3">
                M.Sc.
              </h3>
            </div>
            <div className="sections-tab-child-list">
              <ul>
                <li className="list-elements">
                  Mathematics
                </li>
                <li className="list-elements">
                  Physics
                </li>
              </ul>
              <hr />
            </div>
            <div className="sections-tab-child-sub-header">
              <h3 className="sections-tab-child-h3">
                M.Tech.
              </h3>
            </div>
            <div className="sections-tab-child-list">
              <ul>
                <li className="list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
              </ul>
              <hr />
            </div>
            <div className="sections-tab-child-sub-header">
              <h3 className="sections-tab-child-h3">
                MS (by research)
              </h3>
            </div>
            <div className="sections-tab-child-list">
              <ul>
                <li className="list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
                <li className="list-elements">
                  Communication and Computer Engineering (CCE)
                </li>
              </ul>
            </div>
          </Tab>

          <Tab
            eventKey="Doctoral"
            title="Doctoral Programmes"
            className="sections-child"
            variant="danger"
          >
            <div className="sections-tab-child-header">
              <h2 className="sections-tab-child-h2">
                Doctoral
              </h2>
            </div>
            <div className="sections-tab-child-list">
              <ul>
                <li className="list-elements">
                  Computer Science & Engineering (CSE)
                </li>
                <li className="list-elements">
                  Electronics & Communication Engineering (ECE)
                </li>
                <li className="list-elements">
                  Mechanical- Mechatronics Engineering (MME)
                </li>
                <li className="list-elements">
                  Physics
                </li>
                <li className="list-elements">
                  Mathematics
                </li>
                <li className="list-elements">
                  Humanities and Social Sciences
                </li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Sections;



